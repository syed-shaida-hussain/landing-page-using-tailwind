import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={`${dark && "dark"}`}>
    <div className='bg-gray-200 dark:bg-black text-gray-600 min-h-screen dark:text-white'>
      <Navbar dark = {dark} setDark={setDark} />
      <Carousel />
    </div>
    </div>

  )
}

export default App
