import React from "react";
import "./index.css";

import { assets, STATS } from "../../assets/assets";
import StatInfoCard from "../StatInfoCard/StatInfoCard";
import { Analytics } from "@vercel/analytics/react";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = assets.satish_resume;
    link.download = "Satish_Resume.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="top-section">
      <div className="hero-container">
        <Analytics />
        <img src={assets.satish_hero_img} alt="" />
        <div className="hero-text">
          <h1>
            {" "}
            Hi, I'm <span className="hero-name">SATISH IRRINKI !</span>
          </h1>
          <p>
            I'm passionate about building scalable web applications and solving
            real-world problems through technology. I enjoy creating efficient
            and user-friendly solutions that make a difference. My focus is on
            continuous learning and improving my development skills to build
            impactful applications
          </p>
          <button onClick={handleDownload}>DownLoad Resume</button>
        </div>
      </div>
      <div className="container mx-auto px-8 ">
        <div className="flex gap-12 mt-16 flex-wrap sd:w-1/2 w-full">
          {STATS.map((item) => (
            <StatInfoCard key={item.id} count={item.count} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
