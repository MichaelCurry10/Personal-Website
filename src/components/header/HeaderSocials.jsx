import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/michaelcurry-/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MichaelCurry10" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/michael.curryy/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials