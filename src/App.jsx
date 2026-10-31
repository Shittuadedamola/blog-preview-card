import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <div className='mainContainer'>
        <Header/>
        <About/>
      </div>
    </div>
  )
}

export default App
