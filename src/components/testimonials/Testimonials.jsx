import React from 'react'
import './Testimonials.css'
import AVATR1 from '../../Assets/me-about.png'

// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATR1,
    name: 'Michael Curry',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil, modi minima,\
    quam atque, assumenda voluptate totam maiores aperiam placeat voluptates nulla nobis cupiditate \
    praesentium id tempora reprehenderit obcaecati! Aliquid?'
  },
  {
    avatar: AVATR1,
    name: 'John Curry',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil, modi minima,\
    quam atque, assumenda voluptate totam maiores aperiam placeat voluptates nulla nobis cupiditate \
    praesentium id tempora reprehenderit obcaecati! Aliquid?'
  },
  {
    avatar: AVATR1,
    name: 'Jesse Bryson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil, modi minima,\
    quam atque, assumenda voluptate totam maiores aperiam placeat voluptates nulla nobis cupiditate \
    praesentium id tempora reprehenderit obcaecati! Aliquid?'
  },
  {
    avatar: AVATR1,
    name: 'Santiago Gomez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil, modi minima,\
    quam atque, assumenda voluptate totam maiores aperiam placeat voluptates nulla nobis cupiditate \
    praesentium id tempora reprehenderit obcaecati! Aliquid?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From My Clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination, Navigation]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>

              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>

              <h5 className='client__name'>{name}</h5>

              <small className='client__review'>{review}</small>

            </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials