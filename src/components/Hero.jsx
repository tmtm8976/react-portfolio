import React from 'react'
import "./hero.css";
import MyResume from "./Fatma_Yasser_Resume.pdf";

export default function Hero() {
  const handleDownloadResume = () => {
    window.open(MyResume, "_blank");
  }
  return (
    <section className="hero">
    <img src="images/b2.png" alt="" className="bg-img"/>
    <div className="hero-overlay dark-grad">
      <img src="images/drawing.png" className="myimg"/>
      <div className="hero-txt">
        <p className="hero-subheader">Web developer</p>
        <h1 className="hero-header">Hello, I'm Fatma</h1>
        <p className="hero-description text-white-50">Choose your website design or leave it on me. I make web apps that make you and your clients happy, Contact me to create your own creative web apps.</p>
        <button className="btn btn-outline-light btn-contact" id="downloadBtn" onClick={handleDownloadResume} >RESUME</button>
      </div>
      <div className="band"></div>
    </div>
  </section>
  )
}
