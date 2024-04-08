import { useState } from "react";

interface Options {
  initialValue: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {
  const [counter, setCount] = useState<number>(initialValue);

  const increseBy = (value: number) => {
    const newValue = counter + value;
    if (newValue < 0) return;
    setCount(counter + value);
  };

  return {
    //properties
    counter,

    //methods
    increseBy,
  };
};
