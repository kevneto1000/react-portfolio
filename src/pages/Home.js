import React from 'react'
import TypedText from './../components/TypedText'
import resume from './../../src/resume.pdf'

import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

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
              <button className="btn btn-lg btn-outline-info mt-2 cv">
                <a href={resume} download='resume'>Download CV</a>
              </button>
              <div className="socials">
                <a href="https://www.linkedin.com/in/kevin-nduka-0901161b2/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/kevneto1000" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={32} />
                </a>
                <a href="https://wa.me/07015796524" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={32} />
                </a>
                <a href="https://x.com/netodboss" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX size={32} />
                </a>
                <a href="https://t.me/kevin_neto3" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane size={32} />
                </a>
              </div>
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