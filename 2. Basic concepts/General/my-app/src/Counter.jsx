import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export function Counter({ initialCounter, incrementAmount, decrementAmount, resetAmount}) {
  const [counter, setCounter] = useState(initialCounter);
  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  }
  function handleDecrement() {
    setCounter((prevCounter) => prevCounter - decrementAmount);
  }
  function handleReset() {
    setCounter(resetAmount);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleIncrement}>Increment in {incrementAmount}</button>
      <button onClick={handleDecrement}>Decrement in {decrementAmount}</button>
      <button onClick={handleReset}>Reset to {resetAmount}</button>
    </div>
  );
}
