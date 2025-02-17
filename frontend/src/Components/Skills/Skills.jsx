import React, { useState } from "react";
import SkillCard from "./SkillCard/SkillCard";
import { skillsMe } from "../../assets/assets";

import "./index.css";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsMe[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <div className="skills-container">
      <h1 className="heading">TECHNICAL SKILLS</h1>
      <hr className="hr-line py-4" />
      <div className="skills-content">
        <div className="skills">
          {skillsMe.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
