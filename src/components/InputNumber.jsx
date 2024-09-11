import { Button } from "../ui";

export default function InputNumber({
  value,
  incrementHandler,
  decrementHandler,
  min = -Infinity,
  max = Infinity,
}) {
  return (
    <div className="d-flex">
      <Button
        className="p-4"
        onClick={decrementHandler}
        disabled={value === min}
      >
        -
      </Button>
      <div className="p-4 min-w-10 ">{value}</div>
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
