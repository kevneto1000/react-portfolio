import React from 'react'
import TypedText from './../components/TypedText'

function Home() {

  const strings = ['Hello!', 'Welcome to my Portfolio', 'I am a Fullstack Developer', 'Reach out to me'];

    


return (
    <div className="container">
      <div className="row">
        <div data-aos="fade-up" className="col-md-6">
          <div className="p-5 mb-4 mt-5">
            <div className="container-fluid pt-5 mt-5">
              <h1 className="display-5 fw-bold name">I'm Kevin <span>Nduka</span></h1>
              <h6 className="col-md-8 fs-4 intro my-5">
                <TypedText strings={strings} />
              </h6>
              <button className="btn btn-lg btn-outline-info mt-5" type="button">
                Download CV
              </button>
            </div>
          </div> 
        </div>
        <div data-aos="fade-up" className="col-md-6 d-md-block d-none">
          <img className='guy' src={("./../../kev_port_image-removebg-preview.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home