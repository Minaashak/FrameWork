import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h2>LOCATION</h2>
              <p className="lead fw-bold">2215 John Daniel Drive</p>
              <h5>Clark, MO 65243</h5>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
              <div className="icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-solid fa-globe"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h2>ABOUT FREELANCER</h2>
              <p className="lead fw-bold">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
            
          </div>
        </div>
        
      </footer>
      <div className="copy">
            <p className='fw-bold'>Copyright © Your Website 2021</p>
        </div>
    </>
  );
}
