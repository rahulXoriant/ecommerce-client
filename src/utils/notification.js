import { toast } from "react-toastify";

export const showTostMessage = (type, message) => {
  switch(type) {
  case "success":
    toast.success(message, {
      position: "top-right"
    });
    break;
  case "info":
    toast.info(message, {
      position: "top-right"
    });
    break;
  case "warning":
    toast.warning(message, {
      position: "top-right"
    });
    break;
  default:
    break;
  }
  return;
}