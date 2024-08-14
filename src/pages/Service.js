import React from 'react'
import { Link } from 'react-router-dom'



function Service() {
  return (
    <div className='container'>
      <div className="center-text">
        <h2 className="fw-bold fs-1">My <span>Services</span></h2>
      </div>

      

        <div className="row">
          <div data-aos="fade-down" className='col-md-4'>
            <div className="card box">
              <h3 className="fw-bold ">Frontend <span>Developer</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae maiores, nihil sed dolorum praesentium aliquid obcaecati mollitia incidunt consequuntur officiis?
              </p>
            </div>
          </div>

          <div data-aos="fade-down" className='col-md-4'>
            <div className="card box">
              <h3 className="fw-bold ">Backend <span>Developer</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae maiores, nihil sed dolorum praesentium aliquid obcaecati mollitia incidunt consequuntur officiis?
              </p>
            </div>
          </div>

          <div data-aos="fade-down" className='col-md-4'>
            <div className="card box">
              <h3 className="fw-bold ">Fullstack <span>Developer</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae maiores, nihil sed dolorum praesentium aliquid obcaecati mollitia incidunt consequuntur officiis?
              </p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Service