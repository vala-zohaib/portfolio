// Imports
import React from "react";
import "../experiencecard/Experiencecard.css";

export default function Experiencecard(props) {
  return (
    // Experience Card
    <div className="experienceCard">
      <div>
        <h3>{props.designation}</h3>
        <p>{props.company}</p>
        <span>{props.date}</span>
      </div>
    </div>
  );
}