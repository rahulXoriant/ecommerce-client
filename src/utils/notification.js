import { toast } from "react-toastify";

export const showTostMessage = (type, message) => {
  const options = {
    position: "top-right",
    autoClose: 2000,
    draggablePercent: 60,
  };
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    default:
      break;
  }
  return;
};
