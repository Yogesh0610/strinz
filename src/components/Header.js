import React from 'react'
import WEBLOGO from '../assets/strinz-logo.png';
export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img src={WEBLOGO} alt="BigCo Inc. logo"/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
           How it Works?
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
           Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           FAQs
          </a>
        </li>
        <li className="nav-item">
        <button type="button" className="btn download" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Download</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
