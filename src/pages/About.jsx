import React from 'react'
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top when the component mounts or updates
  }, []);
  return (
    <div className='w-[1600px] flex mx-auto flex-col items-center  mt-[200px] min-h-[80vh] about'>
        <h1 className='text-[80px] about-text'>ABOUT</h1>
            <div className='mt-[50px] about-p-container'>
                <p className='w-[900px] custom-paragraph about-p'>
                OCULOS 34 was founded by three friends coming together. Our products are manufactured in Istanbul, Türkiye, and are available for sale in California, United States. OCULOS 34 is a brand where comfort and unique designs converge. We offer you the highest quality products to express your style and achieve an original look.
 <br />The materials used in our products are carefully chosen to ensure your comfort and freedom of movement. Additionally, we strive to add a touch of style to your wardrobe with our distinctive designs and unique details.
                </p>
            </div>

    </div>
  )
}

export default About