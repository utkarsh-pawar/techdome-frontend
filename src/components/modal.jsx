import React from "react";

const Modal = ({ showModal }) => {
  console.log(showModal);
  return <dialog open={showModal}>This is an open dialog window</dialog>;
};

export default Modal;
