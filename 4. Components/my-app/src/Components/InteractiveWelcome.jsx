import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [userName, setUserName] = useState("")
    function handleInputChange(event){
        const value = event.target.value
        
        setUserName(value)
    }
  return (
    <div>
      <h1>Interactive Welcome</h1>
      <input onChange={handleInputChange} placeholder="Introduce tu nombre"/>
      <Welcome name={userName} />
    </div>
  );
}
