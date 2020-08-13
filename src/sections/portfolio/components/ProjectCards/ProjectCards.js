import React from 'react';

import './ProjectCards.modules.css';

const Cards = ({projects}) =>
<ul className="projects-container">
    {
        projects.map(
            (project, i)=>
                <li  key={i}>
                    <figure className="project-card">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <img 
                        className="project-card__image"
                        src={project.src} 
                        alt={project.title}/>
                    </a>
                    <figcaption className="project-card__info"> 
                        <p>{project.title}</p>
                        <p className="project-card__info__tag">{project.tag}</p>
                        <p>{project.organism}</p>
                        <a 
                            className="project-card__info__github"
                            href={project.codeLink}target="_blank" 
                            rel="noopener noreferrer">
                            github
                        </a>
                    </figcaption>
                    </figure>
                </li>
        )
    }
</ul>

export default Cards;