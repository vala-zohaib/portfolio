// Imports
import React from "react";
import "../educationcard/Educationcard.css";

export default function Educationcard(props) {
  return (
    // Education Card
    <div className="educationCard">
      <div>
        <h3>{props.qualification}</h3>
        <p>{props.institution}</p>
        <span>{props.date}</span>
      </div>
    </div>
  );
}