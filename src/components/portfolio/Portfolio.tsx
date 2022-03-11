import React from 'react'
import './portfolio.css'
import { portfolioData } from '../../constants/portfolioData'

// DO NOT USE THE IMAGES IN PRODUCTION


const Portfolio = () => {
  const {preTitle, title, portfolio } = portfolioData

  return (
    <section id='portfolio'>
      <h5>{preTitle}</h5>
      <h2>{title}</h2>

      <div className="container portfolio__container">
        {
          portfolio.map(({id, img, title,description, github, githubPage}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3>{description}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={githubPage} className='btn btn-primary' target='_blank' rel="noreferrer">Page</a>
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