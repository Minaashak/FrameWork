import React from "react";
import imgError from "./image/1587371_219918-P1D0HC-507.jpg";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <section id="notFound">
        <div className="container">
          <div className="row">
            <img src={imgError} className="w-100" alt="NotFound-Error" />
          </div>
        </div>
      </section>
    </>
  );
}
