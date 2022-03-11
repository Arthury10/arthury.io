import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { experienceData } from '../../constants/experienceData'

const Experience = () => {
  const {preTitle, title, experienceFrontEnd} = experienceData

  return (
    <section id='experience'>
      <h5>{preTitle}</h5>
      <h2>{title}</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{experienceFrontEnd.title}</h3>
          <div className="experience__content">
            {experienceFrontEnd.experience.map((item) => (
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{item.title}</h4>
                <small className='text-light'>{item.description}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience