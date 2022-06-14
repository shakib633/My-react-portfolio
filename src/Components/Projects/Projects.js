import React from 'react';
import { useState, useEffect } from 'react';
import ProjectsCard from './ProjectsCard';
import css from './Projects.css'
const Projects = () => {
    const [projects, setProjects]=useState([]);
    useEffect(()=>{
        fetch(`https://tranquil-chamber-00015.herokuapp.com/project`)
        .then(res=>res.json())
        .then(data=>setProjects(data))

    },[projects])
    return (
        <div id='projects'>
            <h2 className='text-center text-warning mt-5'>My Projects </h2>
            <div className='projectContainer m-3 mt-3 my-5 animated rotateInDownRight
'> 
            {
                projects.map(project=><ProjectsCard key={project._id} project={project}>

                </ProjectsCard>)

            }
            </div>
        </div>
    );
};

export default Projects;