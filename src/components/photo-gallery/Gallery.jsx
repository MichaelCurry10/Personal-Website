import React from 'react'
import './Gallery.css'
import IMG1 from '../../Assets/Acai_Bowl.jpeg'
import IMG2 from '../../Assets/Amsterdam_Cookies.jpeg'
import IMG3 from '../../Assets/Barcelona_Cathedral.jpeg'
import IMG4 from '../../Assets/John_Lennon_Wall.jpeg'
import IMG5 from '../../Assets/Lake_Como.jpeg'
import IMG6 from '../../Assets/Lamb_Chops.jpeg'
import IMG7 from '../../Assets/Lauterbrunnen.jpeg'
import IMG8 from '../../Assets/Sagrada_Familia.jpeg'
import IMG9 from '../../Assets/Zermatt.jpeg'
import IMG10 from '../../Assets/St_Moritz.jpeg'
import IMG11 from '../../Assets/Pizza.jpeg'
import IMG12 from '../../Assets/Eiffel_Tower.jpeg'
import IMG13 from '../../Assets/The W.jpeg'
import IMG14 from '../../Assets/Budapest_Parliment.jpeg'
import IMG15 from '../../Assets/Sitges.jpeg'
import IMG16 from '../../Assets/First_Pano.jpeg'


const Gallery = () => {
  return (
    <section id='gallery'>
        <h5>Photos From My Exchange In Europe</h5>
        <h2>Photo Gallery</h2>

        <div className="container gallery__container">

            <div className="box">

                <div className="gallery__columns">
                    <img src={IMG1} alt="" />
                    <img src={IMG2} alt="" />
                    <img src={IMG3} alt="" />
                    <img src={IMG4} alt="" />
                    <img src={IMG5} alt="" />
                    <img src={IMG16} alt="" />
        
                </div>

                <div className="gallery__columns">
                    <img src={IMG6} alt="" />
                    <img src={IMG7} alt="" />
                    <img src={IMG8} alt="" />
                    <img src={IMG9} alt="" />
                    <img src={IMG10} alt="" />
                </div>

                <div className="gallery__columns">
                    <img src={IMG11} alt="" />
                    <img src={IMG12} alt="" />
                    <img src={IMG13} alt="" />
                    <img src={IMG14} alt="" />
                    <img src={IMG15} alt="" />
                </div>

            </div>
        </div>

    </section>
  )
}

export default Gallery