import React from 'react'
import './About.css'
import ME from "../../Assets/me-about.png"
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineSportsVolleyball } from "react-icons/md"
import { LuDog } from "react-icons/lu";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
              <h5>2025</h5>
              <small>Queen's Commerce</small>
            </article>

            <article className='about__card'>
              <MdOutlineSportsVolleyball className='about__icon'/>
              <h5>12+ Years</h5>
              <small>Competitive Sports</small>
            </article>

            <article className='about__card'>
              <LuDog className='about__icon'/>
              <h5>2 Dogs</h5>
              <small>Golden Retreivers</small>
            </article>
          </div>
          <p>
          Hi, I'm Michael Curry, a 3rd-year Commerce & Computer Science student 
          at Queen’s University. I’m passionate about Golfing, Reading, Travelling, 
          and Watchmaking. Join me in exploring the intersection of business and 
          technology and the thrilling worlds of sports and adventure!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About