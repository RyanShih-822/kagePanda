import { createPortal } from "react-dom";

import { Button } from "@/components/ui";

import { useDialogContext } from "./dialogContext";

export default function Dialog() {
  const { ref, onClose, dialogData } = useDialogContext();
  const { title, component } = dialogData;
  const dialogRef = document.getElementById("dialog");

  return createPortal(
    <dialog ref={ref} className="dialog">
      <div className="d-flex justify-content-between align-items-center p-4">
        <h3>{title}</h3>
        <Button
          type="button"
          className="btn-transparent fs-1 px-3 py-1"
          onClick={onClose}
        >
          &times;
        </Button>
      </div>
      {component}
    </dialog>,
    dialogRef
  );
}
