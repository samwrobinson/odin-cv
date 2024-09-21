import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/general'
import Skills from './components/Skills'
import Education from './components/Education'
import Employment from './components/Employment'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{display: 'flex'}}>
        <div style={{width: '25vw'}}>
          <General></General>
          <Skills/>
          <Education/>
          <Employment />
        </div>
        <div style={{width: '50vw', margin: '0 5%'}}>
          <Skills />
        </div>
      </div>

  )
}

export default App
