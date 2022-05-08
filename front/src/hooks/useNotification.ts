import { toast } from "react-toastify";

const useNotification = () => {
  const success = (text: string) => {
    toast(text);
  };
  const error = (text: string) => {
    toast.error(text);
  };

  return {
    success,
    error,
  };
};

export { useNotification };
