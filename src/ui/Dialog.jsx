import { Button } from "../ui";

import { useDialogContext } from "../context/dialogContext";

export default function Dialog() {
  const { ref, onClose, dialogData } = useDialogContext();
  const { title, component } = dialogData;

  return (
    <dialog ref={ref} className="dialog">
      <div className="h-full  d-flex flex-column">
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
      </div>
    </dialog>
  );
}
