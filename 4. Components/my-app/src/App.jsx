import React, { useState } from "react";
import { Container } from "./Container";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Clock } from "./Clock";

export function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={language}>
      <Container title={<h1>My awesome Application</h1>}>
        
        <InteractiveWelcome />
        <div>
          <label>Select Language: </label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <Clock />
      </Container>
    </LanguageContext.Provider>
  );
}
