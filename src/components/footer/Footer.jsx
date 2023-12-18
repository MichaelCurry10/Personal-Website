import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MICHAEL CURRY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#gallery">Photos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/michaelcurry-/" target='_blank'><AiOutlineLinkedin/></a>
        <a href="https://www.instagram.com/michael.curryy/" target='_blank' ><FaInstagram/></a>
        <a href="https://twitter.com/Michael13004197" target='_blank' ><FaXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Michael Curry. All Rights Reserved</small>
      </div>
    </footer>


  )
}

export default Footer