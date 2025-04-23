import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose, className = "" }) {
  const dialog = useRef(); //클린업전에 변경될수있다.

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
