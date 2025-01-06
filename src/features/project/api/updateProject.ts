import useApi from "@/hooks/useApi";
import { IProject } from "../types";
import { showNotification } from "@/utils/notification";

export const useUpdateProject = () => {
  const {
    execute: updateProject,
    data,
    loading,
  } = useApi<IProject>(
    {
      url: `/Projects`,
      method: "PUT",
    },
    {
      onSuccess() {
        showNotification({
          isOpen: true,
          children: "Project updated successfully!",
          type: "success",
        });
      },
      onError: (res) => {
        showNotification({
          isOpen: true,
          children: "Failed to update project!",
          type: "error",
        });
      },
    }
  );
  return {
    updateProject,
    loading,
    data,
  };
};
