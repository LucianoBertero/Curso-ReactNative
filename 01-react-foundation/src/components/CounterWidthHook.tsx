import { useCounter } from "../hooks/useCounter";

export const CounterWidthHook = () => {
  const { counter, increseBy } = useCounter({ initialValue: 5 });

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
