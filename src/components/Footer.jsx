import React from 'react'
import oculos from "../assets/oculos.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-[400px] md:w-[1300px] h-[200px] mt-[100px] mx-auto flex flex-col items-center justify-center'>
        <div className='flex mt-[20px] h-[100px] items-center justify-center gap-[20px]'>
          <Link to="/home/about">
          <p>ABOUT</p>
          </Link>
          
          <p>FAQS</p>
          <p>TERMS & CONDITIONS</p>
        </div>
        <div> 
          <span className='contact'>Contact: 34oculos34@gmail.com</span>
        </div>
    </div>
  )
}

export default Footer