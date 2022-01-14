import React from 'react'
import './Hero_section.css'
import Hero_Img from '../assets/Rectangle 2.png'
import Hero_Overlay from '../assets/Rectangle 3.png'

const HeroSection = () => {
  return (
    <div className="hero_sec">
      <img className="Main_img" src={Hero_Img} alt="" />
      <img className="Secondary_img" src={Hero_Overlay} alt="" />
      <h1>Computer Engineering</h1>
      <p>142,765 Computer Engineers follow this</p>
    </div>
  )
}

export default HeroSection
