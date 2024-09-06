import { useEffect, useRef } from "react";

export default function Dialog({ openModal, closeModel, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <dialog open={openModal} ref={ref} onCancel={closeModel}>
      {children}
      <button type="button" onClick={closeModel}>
        加入購物車
      </button>
    </dialog>
  );
}
