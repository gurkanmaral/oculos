import React, { useState } from 'react'
import MasonryLayout from '../components/MasonryLayout'
import moodData from '../moodData'
import { useEffect } from 'react'
import galata from "../assets/galata.jpeg"
import siyah from "../assets/siyah.jpeg"
import turuncu1 from "../assets/turuncu1.jpeg"
import mavi from "../assets/mavi.jpeg"
import mavi2 from "../assets/mavi2.jpeg"
import painting from "../assets/painting.jpeg"
import siyah5 from "../assets/siyah5.jpeg"
import siyah1 from "../assets/siyah1.jpeg"
import painting2 from "../assets/painting2.jpeg"
import tree from "../assets/tree.jpeg"
import kir1 from "../assets/kir1.jpeg"
import holly from "../assets/holly.jpeg"
import kir2 from "../assets/kir2.jpeg"
import writing from "../assets/writing.jpeg"
import siyah6 from "../assets/siyah6.jpeg"
import kirmizi from "../assets/kirmizi.jpeg"
import turuncu3 from "../assets/turuncu3.jpeg"
import { Link } from 'react-router-dom'
import los2 from "../assets/los2.jpeg"
const Mood = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top when the component mounts or updates
  }, []);

  
  return (
    <div className='mood-container'>
       <div className='mood-top'>
            <div className='mood-top-1'>
              <img src={galata} alt=""   className="galata"         
    
          />
              <img src={painting} alt=""   className='painting'/>
            </div>
            <div className='mood-top-2'>
                <div className='mood-top-3'>
                  <Link to="/home/products/0">
                  <img src={kir1} alt="" className='kir1' />
                  </Link>
                  <Link to="/home/products/1">
                  <img src={mavi2} alt="" className="mavi2"/>
                  </Link>            
                </div>   
                <div className='mood-top-4'>
                    <Link to="/home/products/3">
                    <img src={turuncu1} alt="" className='turuncu1' />
                    </Link>
                      <Link to="/home/products/2">
                      <img src={los2} alt="" className='los2 '/>
                      </Link>
                    
                </div>              
            </div>
       </div>
       <div className='mood-middle'>
          <div className='middle-1'>
            <Link to="/home/products/4">
            <img src={siyah5} alt=""className='siyah5' />
            </Link>
              <Link to="/home/products/4">
              <img src={siyah} alt=""className='siyah' />
              </Link>       
          </div>
          
              <div className='middle-2'>
                <Link to="/home/products/0">
                <img src={siyah1} alt=""  className='siyah1'/>
                </Link>           
                  <img src={writing} alt=""  className='writing' />
                  <Link to="/home/products/0">
                  <img src={kir2} alt=""  className='kir2'/>
                  </Link>
                  
              </div>
              <div className='middle-3 '>
                <img src={holly} alt="" className='holly' />
                <img src={tree} alt="" className='tree'/>
              </div>
          
          
       </div>
       <div className='mood-bottom'>
        <div className='bottom-1'>
          <img src={painting2} alt=""  className='painting2'/>
        </div>
        <div className='bottom-2'>
          <Link to="/home/products/4"> 
          <img src={siyah6} alt="" className='siyah6 '/>
          </Link>    
        </div>
        <div className='bottom-3'>
          <Link to="/home/products/3">
          <img src={turuncu3} alt="" className='turuncu3'/>
          </Link>      
        </div>
       </div>
    </div>
  )
}

export default Mood