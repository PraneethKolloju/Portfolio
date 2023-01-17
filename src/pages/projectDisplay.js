import React from 'react'
import { useParams } from 'react-router-dom';
import projectList from '../helpers/projectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import '../Styles/projectDisplay.css';
function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image}></img>

            <p>
                {project.skills}
            </p>
            <div style={{ display: 'inline-block' }}>
                <a href={project.urlgit} style={{ paddingRight: '20px' }}><GitHubIcon /></a>
                <a href={project.urll}><LaunchIcon /></a>
            </div>
        </div>
    )
}

export default ProjectDisplay;
