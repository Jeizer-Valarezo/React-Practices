import { Conditional_Rendering_1 } from "./Conditional Rendering 1";


export function Welcome({name = 'Usuario', age}) {   
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      <Conditional_Rendering_1 name={name} age={age}/>
      
    </div>
  )
}