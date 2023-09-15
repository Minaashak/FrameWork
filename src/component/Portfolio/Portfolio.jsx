import React from 'react'
import  imgOne from  './image/poert1.png'
import imgTwo from './image/port2.png'
import imgThree from './image/port3.png'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2>PORTFOLIO COMPONENT</h2>
          <div className="line"></div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="img">
                <img src={imgOne} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img">
                <img src={imgTwo} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img">
                <img src={imgThree} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img">
                <img src={imgTwo} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img">
                <img src={imgThree} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img">
                <img src={imgOne} className="w-100" alt="" />
                <div className="layer">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
