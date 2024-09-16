import React from 'react'

export const ProjectCard = (props) => {
  return (
    <div className='card'>
        <div className='card-header'>
            <img src={props.cover} alt={props.name} />
        </div>
        <div className='card-body'>
            <h2><a href={`/project/${props.id}`}>{props.name}</a></h2>
            <ul>
                {
                    props.technologies.map(tech => <li>{tech}</li>)
                }
            </ul>
        </div>
    </div>
  )
}
