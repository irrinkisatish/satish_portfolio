import React from "react";
import "./index.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <section id="about">
      <h1 className="heading">ABOUT ME</h1>
      <hr className="hr-line" />
      <div className="about about-container">
        <div className="col-left">
          <div className="about-img">
            <img src={assets.satish} alt="Profile" className="img-about" />
          </div>
        </div>
        <div className="col-right">
          <h2>Full-Stack Developer | Tech Enthusiast</h2>
          <p>
            Hi, I'm a Full-Stack Developer passionate about building modern,
            scalable, and user-friendly web applications. With expertise in
            React.js, Node.js, Express.js, and SQL, I focus on developing
            high-performance solutions with clean and maintainable code.
          </p>
          <p>I specialize in:</p>
          <ul>
            <li>
              ✅ Building interactive and responsive UIs with React.js &
              Tailwind CSS.
            </li>
            <li>
              ✅ Developing secure and scalable RESTful APIs with Node.js,
              Express.js & JWT authentication.
            </li>
            <li>✅ Managing databases efficiently using MySQL & SQLite.</li>
            <li>
              ✅ Ensuring performance, security & maintainability in every
              project.
            </li>
          </ul>
          <p>
            As a quick learner, I continuously improve my skills through
            hands-on projects and NxtWave’s Full-Stack Development Program.
          </p>
          <p>
            I am currently seeking a <strong>full-time role</strong> where I can
            collaborate with a dynamic team, contribute to impactful projects,
            and grow as a developer.
          </p>
          <p>
            📩{" "}
            <strong>Let's connect and build something great together!</strong>{" "}
            🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
