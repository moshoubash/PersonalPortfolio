import React from 'react'
import projects from '../data/projects.json'
import { ProjectCard } from './ProjectCard'
const Projects = () => {

  return (
    <section id="projects" className='projects-section'>
        <h1>Projects</h1>
        <div className='cards-container'>
            {projects.map(
                project => <ProjectCard key={project.id} id={project.id} name={project.Name} technologies={project.Technologies} cover={project.Cover}/>
            )}
        </div>
    </section>
  )
}

export default Projects