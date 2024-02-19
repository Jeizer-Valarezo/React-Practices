import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Updating date...");
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h2>{language === 'en' ? "Current time: " : "Hora actual: "} {date.toLocaleTimeString()}</h2>;
}
