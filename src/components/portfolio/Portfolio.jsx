import React from 'react'
import'./Portfolio.css'
import IMG1 from '../../Assets/Data-Visualization-Image.jpeg'


const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  },
  {
    id: 2, 
    image: IMG1,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  },
  {
    id: 3, 
    image: IMG1,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  },
  {
    id: 4, 
    image: IMG1,
    title: 'Project 4',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  },
  {
    id: 5, 
    image: IMG1,
    title: 'Project 5',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  },
  {
    id: 6, 
    image: IMG1,
    title: 'Project 6',
    github: 'https://github.com',
    demo: 'https://linkedin.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'> 

                  <div className="portfolio__item-img">
                    <img src={image} alt={title} />
                  </div>

                  <h3>{title}</h3>

                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>

              </article>
            )
          })
        }

      </div>
    
    </section>
  )
}

export default Portfolio

