import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container">
        <Link to={"/"} className="navbar-brand"><h1 className='logo'>Kevin<span>.</span></h1></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to={"/service"} className="nav-link" href="#">SERVICE</Link>
          </li>
          <li className="nav-item">
            <Link to={"/project"} className="nav-link" href="#">PROJECTS</Link>
          </li>
          <li className="nav-item">
            {/* Modal trigger button */}
            <Link 
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
            >
              CONTACT
            </Link>
            
            {/* Modal Body */}
            {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
            <div
              className="modal fade"
              id="modalId"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              
              role="dialog"
              aria-labelledby="modalTitleId"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold" id="modalTitleId">
                      Contact Me
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body form-group">
                      <input className='w-100 form-control bg-body-secondary rounded-3 m-2' type="text" name='Name' placeholder='Your Name' required/>
                      <input className='w-100 form-control bg-body-secondary rounded-3 m-2' type="email" name='Email' placeholder='Your Email' required/>
                      <textarea className='w-100 form-control bg-body-secondary rounded-3 m-2' rows={6} name="Message" placeholder='Your Message' id=""></textarea>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary mailto:netodboss@gmail.com">Send</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Optional: Place to the bottom of scripts */}
            <script>
              const myModal = new bootstrap.Modal(
                document.getElementById("modalId"),
                options,
              );
            </script>
            
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
