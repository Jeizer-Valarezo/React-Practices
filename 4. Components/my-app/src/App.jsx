import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Components/Welcome"

export function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Welcome name="ur sister bf"/>}/>
    </Routes>
  );
}
