import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Bar.css";

const Bar = () => {
  const location = useLocation();

  // ✅ Default to "/education" when on home "/"
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/" ? "/education" : location.pathname
  );

  useEffect(() => {
    setActiveTab(location.pathname === "/" ? "/education" : location.pathname);
  }, [location.pathname]);

  return (
    <ul className="Bar-container">
      <li className={activeTab === "/education" ? "active" : ""}>
        <Link to="/education">Education</Link>
      </li>
      <li className={activeTab === "/experience" ? "active" : ""}>
        <Link to="/experience">Experience</Link>
      </li>
      <li className={activeTab === "/about" ? "active" : ""}>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default Bar;
