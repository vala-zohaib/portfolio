// Imports
import React from "react";
import "../sectionhead/Sectionhead.css";

export default function Sectionhead(props) {
  return (
    // Section Head
    <div className="sectionHead">
      <h2>
        {props.head1} <span>{props.head2}</span>
      </h2>
    </div>
  );
}