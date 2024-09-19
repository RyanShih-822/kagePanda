import { useRef, useState, useEffect } from "react";

const defaultDialogData = { title: "", component: null };

export default function useDialog() {
  const ref = useRef(null);
  const [dialogData, setDialogData] = useState(defaultDialogData);

  function onOpen(data) {
    if (!ref?.current) {
      return;
    }
    setDialogData(data);
    ref?.current?.showModal();
  }

  function onClose() {
    if (!ref?.current) {
      return;
    }
    setDialogData(defaultDialogData);
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
  return { ref, onOpen, onClose, dialogData };
}
