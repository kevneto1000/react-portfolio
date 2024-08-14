import React from 'react'

function About() {
  return (




    <div className="container">
      <div className="row">
        <div data-aos="fade-left" className="col-md-6 about-img">
          <img src={("./../../kev_port_image-removebg-preview.png")} alt="" />
        </div>

        <div data-aos="fade-right" className="col-md-6 about-text mt-5">
        <h2 className="fw-bold">I am a FullStack <span>Developer</span></h2>
            <div className="exp-area">
              
                <p className="exp">
                    Experience:
                     <span>
                        3 years
                    </span> <br /> <br />
                    Specialty:
                     <span>
                        FullStack Developer
                    </span> <br /> <br />
                    Address:
                     <span>
                        Ogun State, Nigeria.
                    </span> <br /> <br />
                    Email:
                     <span>
                        netodboss@gmail.com
                    </span> <br /> <br />
                    Phone No.:
                      <span>
                        +2347015796524
                    </span> <br /> <br />
                </p>
            </div>
        </div>
      </div>
    </div>
    


  )
}

export default About