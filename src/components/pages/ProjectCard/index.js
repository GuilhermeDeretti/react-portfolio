import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card bg-dark">      
        <img className="card-img-top" alt={props.name} src={process.env.PUBLIC_URL + (props.image)} />      
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          
          <a href={props.deployedLink} role="button" className="btn btn-link"><strong>Deployed App</strong></a>        
          <a href={props.gitHubLink} role="button" className="btn btn-link"><strong>GitHub Repository</strong></a>   
        </div>
      </div>
    </div>      
  );
}

export default ProjectCard;
