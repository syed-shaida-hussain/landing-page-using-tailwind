import { useState } from 'react'
import './App.css'
import { IoCloseSharp, IoMenuSharp} from "react-icons/io5";
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs"

import AnimalImg from "./assets/animal.jpeg"
import AharbalImg from "./assets/aharbal.jpg"
import DoodpathriImg from "./assets/doodpathri.jpg"
import WildlifeImg from "./assets/END-WILDLIFE-CONFLICT-16-9.jpg"
import GurezImg from "./assets/gurez.jpg"
import KokernagImg from "./assets/kokernag.jpg"

const images = [AharbalImg,DoodpathriImg,WildlifeImg,GurezImg,AnimalImg,KokernagImg]

function App() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const [imgIndex,setImgIndex] = useState(0)

  const toggleTheme = () => {
    setDark(!dark)
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const getPreviousImage = () => {
    setImgIndex((index) => index === 0 ? images.length-1 : index-1)
  }

  const getNextImage = () => {
    setImgIndex((index) => index === images.length-1 ? 0 : index+1)
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
        <span className='flex justify-end pr-10 sm:hidden' onClick={toggleMenu}>{menu ? <IoCloseSharp className='w-10 h-10 nav-link'/> : <IoMenuSharp className='w-10 h-10 nav-link'/>}</span>
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
       <section className='flex items-center gap-10 relative'>
       <BsArrowLeftCircleFill className='absolute left-40 w-8 h-8 nav-link ' onClick={getPreviousImage} />
        {
          images.map((image,index) => <div key={index} className={index === imgIndex ? "w-full" : "hidden"}>
            <img  src={image} alt={index} className='w-2/3 rounded-lg mx-auto image relative' />
          </div> 
        )
        }
        <BsArrowRightCircleFill className='absolute right-40 w-8 h-8 nav-link' onClick={getNextImage} />
       </section>
       <section className='flex justify-center gap-10 py-10'>
       {
          images.map((img,index) => <button key={index} onClick={() => setImgIndex(index)} className= {index===imgIndex ? "w-3 h-3 rounded-full border-black bg-black border dark:bg-gray-600" : "w-3 h-3 rounded-full border-black bg-white border"}></button>)
       }
       </section>
       

    </div>
    </div>

  )
}

export default App
