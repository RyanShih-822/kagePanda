import { useState } from "react";

export default function useInputNumber(val, min = -Infinity, max = Infinity) {
  const [counter, setCounter] = useState(val);

  const updateCounterHandler = (action) => {
    const type = {
      minus: () => {
        setCounter((prev) => (prev > min ? prev - 1 : prev));
      },
      add: () => {
        setCounter((prev) => (prev < max ? prev + 1 : prev));
      },
    };
    type[action]();
  };

  return { counter, updateCounterHandler };
}
