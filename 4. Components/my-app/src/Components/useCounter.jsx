import { useState, useEffect, useRef } from "react";

export function useCounter(initialCounter, incrementAmount, decrementAmount, resetAmount) {
  const [counter, setCounter] = useState(initialCounter);
  const changeDirectionRef = useRef("initial");

  useEffect(() => {
    console.log("El valor del contador es " + counter);
    console.log("Dirección del cambio: " + changeDirectionRef.current);
  }, [counter]);

  function handleIncrement() {
    setCounter((prevCounter) => {
      changeDirectionRef.current = prevCounter >= counter ? "up" : "initial";
      return prevCounter + incrementAmount;
    });
  }

  function handleDecrement() {
    setCounter((prevCounter) => {
      changeDirectionRef.current = prevCounter <= counter ? "down" : "initial";
      return prevCounter - decrementAmount;
    });
  }

  function handleReset() {
    setCounter(resetAmount);
    changeDirectionRef.current = "initial";
  }

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
}
