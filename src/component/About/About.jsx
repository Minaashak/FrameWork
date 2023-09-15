import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
            <h2>ABOUT COMPONENT</h2>
            <div className="line"></div>
          <div className="row g-4">
            <div className="col-lg-6">
              <p className="lead text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="lead text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
