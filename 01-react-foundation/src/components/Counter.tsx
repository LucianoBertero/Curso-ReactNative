import { useState } from "react";

export const Counter = () => {
  const [counter, setCount] = useState<number>(10);

  const increseBy = (value: number) => {
    setCount(counter + value);
  };

  return (
    <>
      <h3>
        Contador: <small>{counter}</small>
      </h3>
      <div className="">
        <button onClick={() => increseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increseBy(-1)}> -1</button>
      </div>
    </>
  );
};
