// Imports
import React, { useState, useEffect } from "react";
import "./Skillscontentcard.css";

export default function Skillscontentcard(props) {
  // Skills Slider on Appear State
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const skillsSectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillsSectionTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Skills Content Card
    <div className="skillsContentCard">
      <div className="skillsContentText">
        <span>{props.skill}</span>
        <span>{props.percentage}</span>
      </div>
      <div className="skillsProgress">
        <div
          className="skillsProgressLine"
          style={{
            width: isVisible ? props.percentage : "0",
            transition: isVisible ? "width 2.5s ease" : "",
          }}
        ></div>
      </div>
    </div>
  );
}