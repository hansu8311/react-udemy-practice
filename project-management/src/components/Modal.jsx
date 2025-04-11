import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

function Modal({ children, ref, buttonCaption = "Close" }) {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => modalRef.current.showModal(),
      close: () => modalRef.current.hide(),
    };
  });
  return createPortal(
    <dialog
      ref={modalRef}
      className="backdrop:bg-stone-900/90 px-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default Modal;
