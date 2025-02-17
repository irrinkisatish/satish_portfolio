import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const timelineData = [
  {
    date: "2023 - 2025",
    title: "Master of Computer Applications (MCA)",
    description:
      "Currently pursuing MCA at B V Raju College, Bhimavaram, with a CGPA of 7.5.",
  },

  {
    date: "2019 - 2022",
    title: "Bachelor of Science (BSc) in Computer Science",
    description:
      "Graduated from SVKP Dr K S Raju Arts & Science College, Penugonda, with a CGPA of 6.5.",
  },
  {
    date: "2017 - 2019",
    title: "Intermediate Education",
    description:
      "Completed Intermediate at SVKP & P V Junior College, Penugonda, securing 9.3 CGPA.",
  },
  {
    date: "2016 - 2017",
    title: "Secondary School Certificate (SSC)",
    description:
      "Completed SSC at Divine Mercy English Medium High School, Veeravasaram, securing 8.7 CGPA.",
  },
];

const Education = () => {
  return (
    <section className="timeline-section">
      <h1 className="heading">EDUCATION</h1>
      <hr className="hr-line" />
      <div className="timeline-items">
        {timelineData.map((item, index) => (
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
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
