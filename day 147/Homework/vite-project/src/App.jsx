import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
    <h1>My Website</h1>
    <p>Welcome to my site!</p>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
    </>
  )
}

function App() {
  return React.createElement('div', null, 'Hello');
}

function App() {
  const virtualDOM = (

      <h1>My Website</h1>

  );

  console.log(virtualDOM);

  return virtualDOM;
}



export default App
