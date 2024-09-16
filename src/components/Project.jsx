import React from 'react'
import projects from '../data/projects.json'
import {useParams} from 'react-router-dom'
const Project = () => {
  const {id} = useParams();
  const project = projects.filter(pro => pro.id == id)[0];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const photo = project.Screenshots[currentIndex];

  function backPhoto() {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? project.Screenshots.length - 1 : prevIndex - 1
    );
  }

  function nextPhoto() {
    setCurrentIndex((prevIndex) => 
      prevIndex === project.Screenshots.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className='documentation'>
      <div className='doc'>
        {/*Project Name*/}
        <div className='doc-header'>
        <h1>{project.Name}</h1>
        <a href={project.Repository} className='github-btn'><img src='../src/assets/github_logo.png' alt='github logo' width='65px'/>Source code</a>
        </div>
        {/*Project Screenshots*/}
        <div className='screenshots'>
          <img src={photo} alt={project.Name} width="100%" />
          <div className='btns'>
            <button className='back-btn' onClick={backPhoto}><i class="fa-solid fa-angle-left back"></i></button>
            <button className='next-btn' onClick={nextPhoto}><i class="fa-solid fa-angle-right next"></i></button>
          </div>
        </div>

        {/*Project Description*/}
        <p>{project.Description}</p>
        
        {/*Project Technologies*/}
        <div id="tech-stack" className='tech-stack'>
          <h2>Technologies</h2>
          <ul>
            {project.Technologies.map(technology => <li>{technology}</li>)}
          </ul>
        </div>
    
        {/*Features*/}
        <div id="features" className='features'>
          <h2>Features</h2>
          <ul>
            {project.Features.map(feature => <li>{feature}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project