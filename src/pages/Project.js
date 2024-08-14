import React from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Project() {
  return (
    <div data-aos="fade-in" className='container'>
      <Carousel>
        <div className='project'>
          <img src={("./../../freelance hub capture.PNG")} />
          <p className="legend">My personal project but still a work in progress... <span>https://frontend-freelancehub.vercel.app/</span></p>
        </div>
      </Carousel>
    </div>
  )
}

export default Project