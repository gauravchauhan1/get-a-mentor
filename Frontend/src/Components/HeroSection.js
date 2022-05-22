import React from "react";
import "./hero-section.css";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h3 className="header-info">Mentor Buddy presents</h3>
        <h2 className="header-hero">Ashish</h2>
        <h5 className="header-content">
          Mentors play a key role in the success of individuals. I am really
          happy to be associated with Mentorkart which has a great set of
          Mentors, and Mentorship Programs with a long term vision. They are
          doing a wonderful job in mentoring students, working professionals and
          early-stage entrepreneurs
        </h5>
      </div>
      <div className="hero-right">
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default HeroSection;
