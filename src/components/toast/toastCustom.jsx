import { toast, ToastContainer } from "react-toastify";
import React from "react";

const ToastCustom = (context, type) => {
  if (type === "success" || type === undefined) {
    toast.success(context, {
      position: "top-right",
      autoClose: 4800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "fail") {
    toast.error(context, {
      position: "top-right",
      autoClose: 4800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export default ToastCustom;
