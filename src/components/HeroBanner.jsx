import React, { useState, useEffect, useRef } from 'react';
import kirmiziVideo from "../assets/kir4new.mp4";
import maviVideo from "../assets/maviVideo.mp4";
import maviVideo2 from "../assets/maviVideo2.mp4";
import siyahVideo from "../assets/siyahVideo.mp4"
import herobannermavi from "../assets/herobannermavi.mp4"

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);
  const intersectionObserver = useRef(null);

  const data = [
    kirmiziVideo,
    herobannermavi,
    maviVideo2,
    siyahVideo
  ];

  const prevSlide = () => {
    setCurrent(current === 0 ? 3 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === 3 ? 0 : current + 1);
  };

  const handleVideoEnded = (index) => {
    if (index === current) {
      nextSlide(); // Switch to the next video when the current one finishes playing
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    // Initialize the Intersection Observer
    intersectionObserver.current = new IntersectionObserver(handleIntersection, options);

    // Observe all video elements
    videoRefs.current.forEach((ref) => {
      intersectionObserver.current.observe(ref);
    });

    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect(); // Disconnect the Intersection Observer on component unmount
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play(); // Start playing the video when it comes into the viewport
      } else {
        entry.target.pause(); // Pause the video when it goes out of the viewport
      }
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide(); // Switch to the next video after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(timeout); // Clean up the timeout on component unmount
    };
  }, [current]);

  return (
    <div className='slider'>
      <div className='slider-container' style={{ transform: `translateX(-${current * 100}vw)` }}>
        {data.map((video, index) => (
          <video
            key={index}
            src={video}
            ref={(el) => (videoRefs.current[index] = el)}
            loop={false} // Disable looping
            type="video/mp4"
            controls={false}
            muted
            playsInline
            onEnded={() => handleVideoEnded(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;