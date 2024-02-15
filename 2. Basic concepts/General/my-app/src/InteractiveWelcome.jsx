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
      <input onChange={handleInputChange} placeholder="Introduce tu nombre"/>
      <Welcome name={userName} age={30} />
    </div>
  );
}
