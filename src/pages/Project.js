import React from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Project() {
  return (
    <div data-aos="fade-in" className='container'>
      <div className="center-text mt-4">
        <h2 className="fw-bolder display-5">My <span>Projects</span></h2>
      </div>

      <div className='row project mt-5'>
        <div className="col-md-3 rounded-4">
          <Link to={"https://frontend-freelancehub.vercel.app/"}>
            <img src={("./../../freelance hub capture.PNG")} className='img-fluid' alt='freelance-hub' />
          </Link>
          <h5 className='text-center fw-bolder mt-2'>Freelance Hub</h5>
          <p className="mt-3 text-center">A user friendly freelance website but still in the works...</p>
        </div>
      </div>

    </div>
  )
}

export default Project