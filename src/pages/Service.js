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
              <p>As a skilled frontend developer, I specialize in creating intuitive and responsive user interfaces using modern web technologies. With a strong command of HTML, CSS, and JavaScript, along with experience in frameworks like React, I am dedicated to delivering seamless and engaging digital experiences. My attention to detail and passion for clean, efficient code allows me to translate design concepts into functional, user-friendly applications, ensuring optimal performance across various devices and platforms.</p>
            </div>
          </div>

          <div data-aos="fade-down" className='col-md-4'>
            <div className="card box">
              <h3 className="fw-bold ">Backend <span>Developer</span></h3>
              <p>I am an experienced backend developer with a strong focus on building robust and scalable server-side applications. Proficient in languages such as Python. I specialize in designing and implementing APIs, managing databases, and ensuring the security and efficiency of server operations. My expertise extends to working with various frameworks and tools, including Django to deliver reliable, high-performance solutions that support complex frontend applications and business logic.</p>
            </div>
          </div>

          <div data-aos="fade-down" className='col-md-4'>
            <div className="card box">
              <h3 className="fw-bold ">Fullstack <span>Developer</span></h3>
              <p>I am a versatile fullstack developer with a comprehensive skill set in both frontend and backend technologies. My expertise spans creating dynamic and responsive user interfaces using frameworks like React, as well as building and maintaining scalable server-side applications with Python and Django. I excel in integrating APIs, managing databases, and ensuring seamless communication between client and server, enabling the development of robust, end-to-end web applications that deliver an exceptional user experience.</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Service