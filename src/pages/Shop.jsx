import React, { useEffect } from 'react'
import MoodProducts from '../components/MoodProducts'
import data from '../data'
import ShopProducts from '../components/ShopProducts'
const Shop = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top when the component mounts or updates
  }, []);

  return (
    <div className='shop'>
        <div className='shop-container'>           
            {data.filter(item => item.isProduct === true).map((product) => (
            <ShopProducts key={product.id} products={product} />
          ))}
           
        </div>

    </div>
  )
}

export default Shop