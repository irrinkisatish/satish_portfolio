import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Bar from "./Components/Bar/Bar";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Certificates from "./Components/Certificates/Certificates";

const CommonSections = () => (
  <>
    <Project />
    <Testimonials />
    <Certificates />
    <Contact />
    <Footer />
  </>
);

const Home = () => (
  <>
    <Hero />
    <Skills />
    <Bar />
    <Education /> {/* Default section on Home */}
    <CommonSections />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Home Route: Hero + Bar + Education (default) + Common Sections */}
        <Route path="/" element={<Home />} />

        {/* ✅ Routes with Bar + Selected Section + Common Sections */}
        <Route
          path="/education"
          element={
            <>
              <Hero />

              <Skills />

              <Bar />
              <Education />
              <CommonSections />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              {" "}
              <Hero />
              <Skills />
              <Bar />
              <Experience />
              <CommonSections />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Hero />

              <Skills />
              <Bar />
              <About />
              <CommonSections />
            </>
          }
        />

        {/* ✅ Independent Routes (Hide Bar, Show Only the Page) */}
        <Route path="/portfolio" element={<Project />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ 404 Not Found */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
