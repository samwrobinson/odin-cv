import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/general'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <General></General>
      <Skills/>
      <Education/>
    </>
  )
}

export default App
