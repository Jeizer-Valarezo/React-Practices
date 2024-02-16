import React, { useEffect, useState, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

export function Counter({
  initialCounter,
  incrementAmount,
  decrementAmount,
  resetAmount,
}) {
  const [counter, setCounter] = useState(initialCounter);
  const changeDirectionRef = useRef("initial");

  useEffect(() => {
    console.log("El valor del contador es " + counter);
    console.log("Dirección del cambio: " + changeDirectionRef.current);
  }, [counter]);

  function handleIncrement() {
    setCounter((prevCounter) => {
      changeDirectionRef.current =
        
        prevCounter >= counter ? "up" : "initial";
      return prevCounter + incrementAmount;
    });
  }

  function handleDecrement() {
    setCounter((prevCounter) => {
      changeDirectionRef.current =
        prevCounter <= counter ? "down" : "initial";
      return prevCounter - decrementAmount;
    });
  }

  function handleReset() {
    setCounter(resetAmount);
    changeDirectionRef.current = "initial";
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
