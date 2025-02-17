import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div className="row">Designed By: Satish Irrinki</div>
      </div>
    </footer>
  );
};

export default Footer;
