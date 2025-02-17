import React, { useState } from "react";
import "./index.css"; // Import CSS file

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe60cbad-da50-486b-9c06-678a9254f318");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-container">
      <h1 className="heading block md:hidden">CONTACT ME</h1>
      <hr className="hr-line block md:hidden" />
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.9664741224683!2d81.62148719999999!3d16.578195150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ce6b3529f83b%3A0x933bca048c4267e4!2sTholeru%2C%20Andhra%20Pradesh%20534247!5e0!3m2!1sen!2sin!4v1739546797916!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <h1 className="heading hidden md:block">CONTACT ME</h1>
          <hr className="hr-line hidden md:block" />
          <div className="form-group">
            <label htmlFor="formName">Name</label>
            <input
              type="text"
              id="formName"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="formEmail">E-mail</label>
            <input
              type="email"
              id="formEmail"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="formMessage">Message</label>
            <textarea
              id="formMessage"
              rows="5"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center">
            <button type="submit" className="text-center">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
