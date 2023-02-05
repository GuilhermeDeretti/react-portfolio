import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">      
        <img className="card-img-top" alt={props.name} src={process.env.PUBLIC_URL + (props.image)} />      
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"><strong>Deployed App:</strong> {props.deployedLink}</p>        
          <p className="card-text"><strong>GitHub Repository:</strong> {props.gitHubLink}</p>   
        </div>
      </div>
    </div>      
  );
}

export default ProjectCard;
