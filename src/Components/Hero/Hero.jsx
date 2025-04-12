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
      <h1>Real Laughs. Real Life. Every Day.</h1>
      <p>Watch hilarious moments, raw vlogs, and feel-good content straight from Aapke Official. No filters, just vibes.</p>
      <div className="hero-btns">
        <button>Start Watching</button>
        <button>Subscribe for Fun</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
