import { notification } from "antd";

type NotificationParams = {
  isOpen: boolean;
  children: string;
  type?: "success" | "info" | "warning" | "error";
  duration?: number;
};

export const showNotification = ({
  isOpen,
  children,
  type = "info",
  duration = 4.5,
}: NotificationParams) => {
  if (isOpen) {
    notification[type]({
      message: type.toUpperCase(),
      description: children,
      duration,
    });
  }
};
