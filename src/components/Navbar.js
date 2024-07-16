import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container">
        <a className="navbar-brand" href="#"><h1 className='logo'>Kevin<span>.</span></h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SERVICE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
