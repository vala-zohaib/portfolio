// Imports
import React from "react";
import "../certificationscard/Certificationscard.css";

export default function Certificationscard(props) {

  return (
    // Certifications Card
        <div className="certificationsCardContent">
          <h3>{props.title}</h3>
          <p>{props.company}</p>
        </div>
  );
}