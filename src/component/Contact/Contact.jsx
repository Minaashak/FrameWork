import React from 'react'
import './Contact.css'

export default function Contact() {
    function handelform(e){
        e.preventDefault();
    }
  return (
    <>
      <section id="contact">
        <div className="container">
          <h2>CONATCT SECTION</h2>
          <div className="line"></div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <div className="form">
                <form action="" onSubmit={handelform}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="User Name"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="User Age"
                  />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="User Email"
                  />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="User Password"
                  />
                  <button>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
