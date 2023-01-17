import React from 'react'
import ProjectItem from '../components/projectItem';
import '../Styles/project.css'
import projectList from '../helpers/projectList';
function projects() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {/* <ProjectItem name='Profit Prediction' image={profit} />
                <ProjectItem /> */}
                {projectList.map((ele, index) => {
                    return <ProjectItem id={index} name={ele.name} image={ele.image} />
                })}
            </div>
        </div>
    )
}

export default projects;