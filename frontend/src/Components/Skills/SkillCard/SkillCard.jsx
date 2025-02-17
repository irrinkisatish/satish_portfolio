import React from "react";
import "./index.css";

const SkillCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={icon} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
