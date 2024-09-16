import React from 'react'
import PersonalData from '../data/personalData.json'

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
      <h1>Skills</h1>
      <ul>
        {
          PersonalData.map(
            ski => ski.category==='skills'?<li>{ski.skill}</li> : <li>{ski.tool}</li>
          )
        }
      </ul>
    </section>
  )
}

export default Skills