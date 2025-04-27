import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>My Website</h1>
    <p>Welcome to my site!</p>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>      
  </div>
  )
}

export default App
