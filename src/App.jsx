import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState("light")

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }
  return (
    <div className={`${mode}`}>
    <div className='bg-gray-200 dark:bg-black text-gray-600 min-h-screen dark:text-white'>
       <header className='bg-gray-200 text-gray-600  dark:bg-black dark:text-white font-bold text-xl w-full py-10'>
        <nav>
          <ul className='flex justify-end gap-10 pr-10'>
            <li className='font-medium hover:cursor-pointer'> Home</li>
            <li className='font-medium hover:cursor-pointer'> Contact</li>
            <li className='font-medium hover:cursor-pointer'> About</li>
            <li className='font-medium hover:cursor-pointer'> Categories</li>
            <li className='font-medium hover:cursor-pointer'> <button onClick={toggleTheme}>Toggle Theme</button> </li>
            
          </ul>
        </nav>
       </header>

    </div>
    </div>

  )
}

export default App
