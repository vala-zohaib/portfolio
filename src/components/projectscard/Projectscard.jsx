// Imports
import React from "react";
import "../projectscard/Projectscard.css";

export default function Projectscard(props) {
  return (
    // Projects Card
    <div className="projectsCard">
      <div>
        <h3>{props.name}</h3>
        <p>{props.details}</p>
        <p>
          <b>GitHub Source Code: </b>
          <a href={props.link}>{props.linktext}</a>
        </p>
      </div>
    </div>
  );
}