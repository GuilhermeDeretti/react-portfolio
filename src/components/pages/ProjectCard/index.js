import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + (props.image)} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed App:</strong> {props.deployedLink}
          </li>
          <li>
            <strong>GitHub Repository:</strong> {props.gitHubLink}
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
