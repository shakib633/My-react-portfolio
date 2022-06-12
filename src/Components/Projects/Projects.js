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

    },[])
    console.log(projects);
    return (
        <div id='projects'>
            <div className='projectContainer m-3 my-5 animated rotateInDownRight
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