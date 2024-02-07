
export function Welcome({name = 'Usuario', age}) {   
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      <p>Your age is {age}</p>
    </div>
  )
}
