import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Welcome } from "./Components/Welcome";
import { Counter } from "./Components/Counter";
import { Container } from "./Components/Container";
import { ShowGithubUser } from "./Components/ShowGithubUser";

export function App() {
  

  return (
    <Container title={<div>
      <h1>Mi asombrosa aplicacion :D</h1>
      <Link to="/">Home</Link> | <Link to="counter">Counter</Link> | <Link to="users/:username">GithubUser</Link>
    </div>}>
      <Routes>
        <Route path="/" element={<Welcome name="ur sister bf" />}/>
        <Route path="counter" element={<Counter initialCounter={0} incrementAmount={1} decrementAmount={1} resetAmount={0} />}/>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>

      
    </Container>
  );
}
