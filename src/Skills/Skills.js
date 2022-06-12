import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Skill from './Skill';
import css from './Skills.css'
const Skills = () => {
    const [Skills, setSkills]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
    return (
        <div className="w-100">
            <h1 className=" mt-5 text-center text-success fw-bold mb-3">My Skills</h1>
            <div className="container-skill px-2 mx-5"> 
           {
                Skills.map(skill=><Skill key={skill.id} skill={skill}>

                </Skill>)

            }
           </div>
        </div>
    );
};

export default Skills;