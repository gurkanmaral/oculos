import React from 'react'
import { Link } from 'react-router-dom'
import siyah1 from "../assets/siyah1.jpeg"
import kir1 from "../assets/kir1.jpeg"
import { useEffect } from 'react'
const Cats = () => {

        useEffect(() => {
                window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
              }, []);
       

  return (
    <div className='cats mt-[100px]'>
        <div className='cats-container w-[1200px] flex flex-row gap-[20px] mx-auto' >
                <div className='cats-shop flex flex-col items-center '>
                        <Link to="/home/shop">
                        <img src={siyah1}
                        className='w-[550px] h-[600px] rounded-[20px] object-cover'
                        alt="" />
                        </Link>
                       
                        <Link to="/home/shop">
                        <button className=' text-[25px] button font-semibold'>
                                    SHOP 
                            </button>
                        </Link>
                            
                </div>
                <div className='cats-shop  flex flex-col items-center'>
                        
                <Link to="/home/mood">
                <img src={kir1}
                        className='w-[550px] h-[600px] rounded-[20px] object-cover'
                        alt="" />
                        </Link>
                        
                        <Link to="/home/mood">
                        <button className=' text-[25px] button font-semibold'>
                                    MOOD
                            </button>
                        </Link>
                            
                </div>
        </div>

    </div>
  )
}

export default Cats