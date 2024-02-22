import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Components/Welcome"
import { Counter } from "./Components/Counter"

export function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Welcome name="ur sister bf"/>}/>
      <Route path="counter" element={<Counter initialCounter={0} incrementAmount={1} decrementAmount={1} resetAmount={0}/>}/>
    </Routes>
  );
}
