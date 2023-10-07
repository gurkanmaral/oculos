import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Cats from '../components/Cats'
import { useEffect } from 'react'
import Mobile from '../components/Mobile'
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top when the component mounts or updates
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <div>
        {!isMobile ? <HeroBanner /> : <Mobile />}
        <Cats />

    </div>
  )
}

export default Home