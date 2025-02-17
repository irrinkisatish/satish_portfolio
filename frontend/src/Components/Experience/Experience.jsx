import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const experienceData = [
  {
    date: "Dec 2022 - Present",
    title: "Hands-on Full-Stack Development",
    company: "NxtWave Disruptive Technologies",
    description:
      "Gained practical experience in full-stack development by learning and building projects through NxtWave.",
  },
  {
    date: "Dec 2024 - Present",
    title: "Freelance Developer",
    company: "Fiverr",
    description:
      "Working as a freelance developer on Fiverr, delivering scalable and user-friendly web applications for clients worldwide.",
  },
  {
    date: "March 2024 - April 2024",
    title: "Web Application Development - Intern",
    company: "V CUBE Software Solutions Pvt Ltd",
    description:
      "Completed a summer internship focused on frontend and backend development, database management, and API development.",
  },
  {
    date: "August 2023 - September 2023",
    title: "Frontend Development - Intern",
    company: "Prodigy Infotech",
    description:
      "Worked on frontend projects, gaining hands-on experience in front-end.",
  },
];

const Experience = () => {
  return (
    <section className="timeline-section">
      <h1 className="heading">EXPERIENCE</h1>
      <hr className="hr-line" />
      <div className="timeline-items">
        {experienceData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              {item.company && <h4 className="company-name">{item.company}</h4>}
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
