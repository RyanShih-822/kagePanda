import { useState } from "react";

import { Button } from "../ui";

export default function InputNumber({
  value,
  incrementHandler,
  decrementHandler,
}) {
  return (
    <div className="d-flex">
      <Button className="rounded p-4" onClick={decrementHandler}>
        -
      </Button>
      <div className="p-4 min-w-10 ">{value}</div>
      <Button className="rounded p-4" onClick={incrementHandler}>
        +
      </Button>
    </div>
  );
}
