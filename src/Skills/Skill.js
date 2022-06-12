import React from "react"
import css from './Skill.css'
const Skill = ({skill}) => {
    const{title, image}=skill
  return (
    <>
    <div className="m-2 "> 
        
      <div className='box-shadow grid  md:ms-5 grid-cols-6 btn_shadow'>
        <img src={skill.image} alt='' />
        <h3 className="mt-3">{skill.title}</h3>
          
      </div>
    </div>
    </>
  )
}

export default Skill;