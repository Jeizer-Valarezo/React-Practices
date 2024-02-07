import { Age } from "./Age";


export function Welcome({name = 'Usuario', age}) {   
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      <Age age={age}/>
    </div>
  )
}