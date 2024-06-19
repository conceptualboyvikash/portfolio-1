import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">VIKASH KUMAR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#experience">Development</a></li>
        <li><a href="#portfolio">Profiles</a></li>
        <li><a href="#testimonials">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100011420221499"><FaFacebook/></a>
        <a href="https://www.instagram.com/conceptualboy_vikash/"><FiInstagram/></a>
        <a href="https://x.com/vikashk82361286"><BsTwitter/></a>

      </div>
      
      <div className="footer__copyright">
        <small>&copy;2024 VIKASH KUMAR. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
