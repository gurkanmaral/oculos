import React from 'react'
import { Link } from 'react-router-dom'



const MoodProducts = ({products}) => {
  return (
    <div className='mood-products mt-[20px]'>
       <div className='mood-product-container'>
        {products.idRef ? (
            <Link to={`/home/products/${products.idRef}`}>
            <img src={products.img} alt="" className='rounded-lg w-full cursor-pointer' />
            </Link>  
        ) : (
            <img src={products.img} alt="" className='rounded-lg w-full ' />
        )}
        
       </div>

    </div>
  )
}

export default MoodProducts