import { useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const children = []
  for(let i = 0; i < 20; i++) {
    children.push(<Card id={i+1}/>);
  }

  return (
    <>
      {children}
    </>
  )
}

export default App
