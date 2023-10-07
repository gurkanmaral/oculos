import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import video from "../assets/fullSizeRender.mp4"
const Login = () => {

  const navigate = useNavigate()

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
          <video 
          src={video}
          type="video/mp4"
          loop
          controls={false}
            muted
          autoPlay
          className=' w-full h-full object-cover '
          />
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 login-shop'>
              <Link to="/home">
                <h1 className='text-white text-[50px] md:text-[120px]  cursor-pointer opacity-[0.8] shop-now'>
                  SHOP NOW
                </h1>
              </Link>
            </div>
        <div className='absolute  bottom-20 left-[50px]'>
        <h1 className='text-white text-[25px] md:text-[60px]'>
                  <span>OCULOS</span>
                  <span className='ml-[7px]'>34</span>
                  <br />
                  NEW WAY OF LIFE
                </h1>
        </div>
        </div>

    </div>
  )
}

export default Login