import React from 'react'
import Masonry from 'react-masonry-css'
import MoodProducts from './MoodProducts'

const breakpointObj = {
  default: 4,
  1100: 6,
  900:5,
  600: 2,
  500: 1,
  700:3,
};

const MasonryLayout = ({products}) => {
  return (
    <Masonry className='flex animate-slide-fwd gap-[20px]' breakpointCols={breakpointObj}>
      {products?.map((products)=><MoodProducts key={products.id} products={products} className="w-max" />)}
    </Masonry>
  )
}

export default MasonryLayout