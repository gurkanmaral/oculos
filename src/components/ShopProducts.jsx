import React from 'react'
import { Link } from 'react-router-dom'

const ShopProducts = ({products}) => {
  return (
    <div className='shop-products'>
        <div className='shop-image'>
            <Link to={`/home/products/${products.id}`}>
            <img src={products.img1} alt="" className='mainImg rounded-[15px]'/>
            </Link>                     
        </div>
        <div className='flex justify-between p-[3px]'>
            <p className='font-semibold max-w-[250px] ' style={{ wordBreak: 'break-all' }}>
                {products.name}
            </p>
            <p className=''>{products.price}.00$</p>
        </div>
      

    </div>
  )
}

export default ShopProducts