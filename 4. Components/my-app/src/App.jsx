import React, { useState } from "react";
import { Container } from "./Components/Container";
import { InteractiveWelcome } from "./Components/InteractiveWelcome";
import { LanguageContext } from "./Components/LanguageContext";
import { Clock } from "./Components/Clock";
import { GithubUser } from "./Components/GithubUser";
import { GithubUsers } from "./Components/GithubUsers";

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
        <GithubUser username="Jeizer-Valarezo"/>
        <GithubUsers/>
      </Container>
    </LanguageContext.Provider>
  );
}
