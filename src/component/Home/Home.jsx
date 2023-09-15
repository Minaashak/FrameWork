import React from "react";
import "./Home.css";
import HomeImage from "./image/avataaars.svg"
export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container">
            <img src={HomeImage} alt="" />
            <h1>START FRAMEWORK</h1>
            <div className="line"></div>
            <p className="lead fw-bold">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
