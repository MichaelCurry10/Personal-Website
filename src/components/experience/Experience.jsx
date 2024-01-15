import React from 'react'
import './Experience.css'
import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      {/* START OF FRONT END */}
      <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>  
                <div
                  ><h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>  
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>

        {/* END OF FRONT END */}

          <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>Arduino</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
               <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>R</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                  <h4>Power BI</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
          </div>

      </div>

    </section>
  )
}

export default Experience