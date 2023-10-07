import React, { useState } from 'react'
import {FaEbay} from "react-icons/fa"
import {BiLogoEtsy} from "react-icons/bi"
import {BiLogoTiktok} from "react-icons/bi"
import {AiOutlineInstagram} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open,setOpen] = useState(false)


  return (
    <div className='navbar w-full'>
        <div className='navbar-container flex justify-between p-[25px]  items-center '>  
            <div className='navbar-left  font-bold '>
                   <Link to="/home/shop">
                     <p className='text-[25px] md:text-[35px]'>SHOP</p>
                   </Link>
            </div>
            <div className='navbar-middle text-[25px] md:text-[40px] font-bold  '>
                <Link to="/home" className='oculos34'>
                <span>OCULOS</span>
                <span className='ml-[7px]'>34</span>
                </Link>
            </div>
            <div className='hidden sm:flex navbar-right  gap-[20px] relative items-center justify-center'>
                 <a href="https://www.etsy.com/shop/OCULOS34Creations?ref=shop-header-name&listing_id=1498921087" target="_blank" rel="noopener noreferrer">
                      <BiLogoEtsy className='w-[50px] h-[50px]' />
                      </a>            
                 <a href="https://instagram.com/oculos.34?igshid=MmIzYWVlNDQ5Yg=="  target="_blank" rel="noopener noreferrer">
                   <AiOutlineInstagram className='w-[30px] h-[40px]'/> 
                 </a>                                  
                      <a href="https://www.tiktok.com/@oculos34?_t=8dWeyWF1s1m&_r=1"  target="_blank" rel="noopener noreferrer">
                      <BiLogoTiktok className='w-[30px] h-[40px]' />
                      </a>
                      
                    
            </div>

        </div>
    </div>
  )
}

export default Navbar