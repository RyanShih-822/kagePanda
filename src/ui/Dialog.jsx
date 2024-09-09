import { forwardRef } from "react";

import { Button } from "../ui";

export default forwardRef(function Dialog({ title, onClose, children }, ref) {
  return (
    <dialog ref={ref} className="dialog">
      <div className="h-full  d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center p-4">
          <h3>{title}</h3>
          <Button
            type="button"
            className="text-gray bg-none fs-1 px-3 py-1"
            onClick={onClose}
          >
            &times;
          </Button>
        </div>
        {children}
      </div>
    </dialog>
  );
});
