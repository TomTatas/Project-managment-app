import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal(); // Correct method to open dialog
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-gray-900/60 p-6 rounded-lg shadow-lg bg-white"
    >
      {children}
      <div className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
