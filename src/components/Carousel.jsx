import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs"
import AnimalImg from "../assets/animal.jpeg"
import AharbalImg from "../assets/aharbal.jpg"
import DoodpathriImg from "../assets/doodpathri.jpg"
import WildlifeImg from "../assets/END-WILDLIFE-CONFLICT-16-9.jpg"
import GurezImg from "../assets/gurez.jpg"
import KokernagImg from "../assets/kokernag.jpg"
import { useState } from "react"

const images = [AharbalImg,DoodpathriImg,WildlifeImg,GurezImg,AnimalImg,KokernagImg]



const Carousel = () => {
      const [imgIndex,setImgIndex] = useState(0)
    
    const getPreviousImage = () => {
        setImgIndex((index) => index === 0 ? images.length-1 : index-1)
      }
    
      const getNextImage = () => {
        setImgIndex((index) => index === images.length-1 ? 0 : index+1)
      }
  return (
    <div>
        <section className='flex items-center gap-10'>
       <BsArrowLeftCircleFill className='absolute left-2 sm:left-20 w-8 h-8 nav-link' onClick={getPreviousImage} />
        {
          images.map((image,index) => <div key={index} className={index === imgIndex ? "w-full relative" : "hidden"}>
            <img  src={image} alt={index} className='w-2/3 rounded-lg mx-auto image' />
          </div> 
        )
        }
        <BsArrowRightCircleFill className='absolute right-2 sm:right-20 w-8 h-8 nav-link' onClick={getNextImage} />
       </section>
       <section className='flex justify-center gap-10 py-10'>
       {
          images.map((img,index) => <button key={index} onClick={() => setImgIndex(index)} className= {index===imgIndex ? "w-3 h-3 rounded-full border-black bg-black border dark:bg-gray-600" : "w-3 h-3 rounded-full border-black bg-white border"}></button>)
       }
       </section>
    </div>
  )
}

export default Carousel