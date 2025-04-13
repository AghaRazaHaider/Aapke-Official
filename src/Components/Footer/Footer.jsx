import React from 'react'
import './footer.css'
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
        <footer>
      <div className='footer-sec-1'>
        <div><p>Bringing Laughter, One Video at a Time!</p></div>
        <div className='footer-icon-yt'><IoLogoYoutube /></div>
      </div>
      <div className="footer-copyright">
        <h6>© 2025 Aapke Official. All Rights Reserved.</h6>
      </div>
      </footer>
    </div>
  )
}

export default Footer

