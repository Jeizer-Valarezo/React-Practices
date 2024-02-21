import React, { useState } from "react";
import { Container } from "./Components/Container";
import { InteractiveWelcome } from "./Components/InteractiveWelcome";
import { LanguageContext } from "./Components/LanguageContext";
import { Clock } from "./Components/Clock";
import { GithubUser } from "./Components/GithubUser";
import { GithubUsers } from "./Components/GithubUsers";
import { Counter } from "./Components/Counter";
import { Form } from "./Components/Form";

export function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const onLogin = (loginData) => {
    console.log("Login data:", loginData);
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
        <Counter initialCounter={0} incrementAmount={1} decrementAmount={1} resetAmount={0}/>
        <Form onLogin={onLogin}/>
      </Container>
    </LanguageContext.Provider>
  );
}
