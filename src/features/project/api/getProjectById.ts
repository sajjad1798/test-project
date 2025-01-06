import useApi from "@/hooks/useApi";
import { IProject } from "../types";
import { showNotification } from "@/utils/notification";

export const useGetProjectByID = () => {
  const {
    execute: getProjectByID,
    data,
    loading,
  } = useApi<IProject>(
    {
      url: `/Projects`,
      method: "GET",
    },
    {
      onError: (res) => {
        showNotification({
          isOpen: true,
          children: "Something went wrong!",
          type: "error",
        });
      },
    }
  );
  return {
    getProjectByID,
    loading,
    data,
  };
};
