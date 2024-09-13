import { Button, Input } from "../ui";

export default function InputNumber({
  value,
  incrementHandler,
  decrementHandler,
  min = -Infinity,
  max = Infinity,
}) {
  return (
    <div className="position-relative d-flex align-items-center gap-4">
      <Button
        className="p-4"
        onClick={decrementHandler}
        disabled={value === min}
      >
        -
      </Button>
      <label htmlFor="inputNumber" className="min-w-10 d-block text-center">
        {value}
      </label>
      <Input
        className="opacity-0 position-absolute top-0"
        id="inputNumber"
        type="hidden"
        readOnly
        value={value}
      />

      <Button
        className="p-4"
        onClick={incrementHandler}
        disabled={value === max}
      >
        +
      </Button>
    </div>
  );
}
