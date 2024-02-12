import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Updating date...");

      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h2>Current time: {date.toLocaleTimeString()}</h2>;
}
