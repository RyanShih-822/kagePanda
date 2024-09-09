import { useRef, useEffect } from "react";

export default function useDialog() {
  const ref = useRef(null);

  function onOpen() {
    if (!ref?.current) {
      return;
    }
    ref?.current?.showModal();
  }

  function onClose() {
    if (!ref?.current) {
      return;
    }

    ref?.current?.close();
  }

  // close outside
  useEffect(() => {
    const dialogRef = ref?.current;
    function closeOutSideHandler(e) {
      if (e.target === dialogRef) {
        dialogRef.close();
      }
    }

    dialogRef?.addEventListener("click", closeOutSideHandler);

    return () => {
      dialogRef?.removeEventListener("click", closeOutSideHandler);
    };
  }, []);
  return { ref, onOpen, onClose };
}
