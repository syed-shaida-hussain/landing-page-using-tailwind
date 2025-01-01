import { useState } from 'react'
import './App.css'
import { IoCloseSharp, IoMenuSharp} from "react-icons/io5";

function App() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className={`${dark && "dark"}`}>
    <div className='bg-gray-200 dark:bg-black text-gray-600 min-h-screen dark:text-white'>
       <header className='bg-gray-200 text-gray-600  dark:bg-black dark:text-white font-bold text-xl w-full py-10'>
        <nav className='hidden sm:block'>
          <ul className='flex justify-end gap-4 pr-10 lg:gap-10'>
            <li className='nav-link'> Home</li>
            <li className='nav-link'> Contact</li>
            <li className='nav-link'> About</li>
            <li className='nav-link'> Categories</li>
            <li className='nav-link'> <button onClick={toggleTheme}>{dark ? "Light Mode" : "Dark Mode"}</button> </li>
          </ul>
        </nav>
        <span className='flex justify-end pr-10 sm:hidden' onClick={toggleMenu}>{menu ? <IoCloseSharp className='w-10 h-10'/> : <IoMenuSharp className='w-10 h-10'/>}</span>
        {
          menu && <nav className='mt-5 sm:hidden'>
          <ul className='flex flex-col gap-10 items-end pr-20 lg:gap-10'>
            <li className='nav-link'> Home</li>
            <li className='nav-link'> Contact</li>
            <li className='nav-link'> About</li>
            <li className='nav-link'> Categories</li>
            <li className='nav-link'> <button onClick={toggleTheme}>{dark ? "Light Mode" : "Dark Mode"}</button> </li>
          </ul>
        </nav>
        }
       </header>

    </div>
    </div>

  )
}

export default App
