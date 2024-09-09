import React from 'react'
import Skills from '../components/Skills'




function Service() {
  return (
    <div className='container'>
      <div className="center-text mt-4">
        <h2 className="fw-bolder display-5">My <span>Services</span></h2>
      </div>

      <div className="row">
        <div data-aos="fade-down" className='skills mt-4'>
          <div className=''>
            <Skills
              name="HTML"
            />

            <Skills
              name="CSS"
            />

            <Skills
              name="JavaScript"
            />
          </div>

          <hr />

          <div>
            <Skills
              name="React"
            />

            <Skills
              name="Python"
            />

            <Skills
              name="Django"
            />
          </div>

          <hr />

          <div>
          <Skills
            name="Redux"
          />

          <Skills
            name="Git"
          />

          <Skills
            name="Bootstrap"
          />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service