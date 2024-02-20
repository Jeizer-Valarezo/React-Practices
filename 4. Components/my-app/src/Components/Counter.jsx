import React, { useEffect, useState, useRef } from "react";
import { useCounter } from "./useCounter";


export function Counter({ initialCounter, incrementAmount, decrementAmount, resetAmount }) {
  const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(
    initialCounter,
    incrementAmount,
    decrementAmount,
    resetAmount
  );

  return (
    <div>
       <h2>Counter: {counter}</h2> 
      <button onClick={handleIncrement}>Increment in {incrementAmount}</button>
      <button onClick={handleDecrement}>Decrement in {decrementAmount}</button>
      <button onClick={handleReset}>Reset to {resetAmount}</button>
    </div>
  );
}