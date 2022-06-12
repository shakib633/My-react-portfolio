import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card} from 'react-bootstrap'
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
//         <div className="carousel-item">
//         <div class="card" style="width: 18rem;">
//   {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
  
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
//         </div>
<div> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={project.image} />
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <Card.Text>
      {project.about}
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link className="text-decoration-none btn btn-primary rounded shadow" href={project.livelink}>Git</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>

);
};

export default ProjectsDetail;