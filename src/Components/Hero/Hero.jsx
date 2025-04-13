import React from 'react'
import './hero.css'
import banner from '../../assets/banner.jpg';

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="banner">
            <img src={banner} alt="banner"/>
            </div>
            <div className="hero-center">
      <h1>Comedy Ka <span className='daily-dose-span'>Daily Dose</span> – Bas <span className='daily-dose-span'>Yahan</span> Milta Hai!</h1>
      <p>Watch hilarious moments, raw vlogs, and feel-good content straight from Aapke Official. No filters, just vibes.</p>
      <div className="hero-btns">
        <a href="https://www.youtube.com/@aapkeofficial/videos" target="_blank" rel="noopener noreferrer">Start Watching</a>
        <a href="https://youtube.com/@aapkeofficial?si=_dCZjEu88zeATftj" target="_blank" rel="noopener noreferrer">Subscribe for Fun</a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero; 