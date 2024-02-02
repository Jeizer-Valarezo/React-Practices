import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dataUser = [
    {
      id: 1,
      name: "pepe",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 2,
      name: "jose",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 3,
      name: "juan",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "lucas",
      photo: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 5,
      name: "jesus",
      photo: "https://randomuser.me/api/portraits/me"
    }]

  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
