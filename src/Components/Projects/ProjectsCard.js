import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsCard = ({project}) => {
    const{title, image, _id}=project
    const navigate = useNavigate();
    const handleProject = (_id) => {
        navigate(`/project/${_id}`)
    }

    return (
        <>
        <div className=" mx-3">       
          <div className=' border  shadow p-3'>
            <p className=' mx-5'><img src={project.image} alt='' /></p>
            <h3 className="mt-3 mx-5">{project.title}</h3>
            <button className="mx-5 btn btn-primary" onClick={() => handleProject(_id)}>Detail</button>

          </div>
        </div>
        </>
    );
};

export default ProjectsCard;