import React from 'react'
import './Nav.css'
import { BiHome } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { LuBookMarked } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaRegUserCircle/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><LuBookMarked/></a>
      <a href="#gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active': ''}><IoCameraOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav