import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card, Carousel} from 'react-bootstrap'
import css from './ProjectsDetail.css'
const ProjectsDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch(`https://tranquil-chamber-00015.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);
    return (
<div className=""> 
<div className="my-5  ">
<Card className=" card-item mx-auto" style={{ width: '36rem' }}>
    <Carousel>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.image}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.slide2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.slide3}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.slide4}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  <Card.Body>
    <Card.Title>{project.title} <p>{project.about}</p>
</Card.Title>
    <Card.Text>
      {project.details}
    </Card.Text>
  </Card.Body>
  
  <Card.Body className="mx-3">
    <Card.Link className="text-decoration-none btn btn-primary  rounded shadow" target="_blank " href={project.livelink}>Livesite</Card.Link>
    <Card.Link className="text-decoration-none btn btn-primary rounded shadow"target="_blank " href={project.clint}>Clint-side</Card.Link>
    <Card.Link className="text-decoration-none btn btn-primary rounded shadow" target="_blank "  href={project.server}>Server-side</Card.Link>
  </Card.Body>
</Card>
</div>

</div>

);
};

export default ProjectsDetail;