import logo from "./navbar_logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import satish from "./satish.jpg";
import backend_img from "./backend_img.png";
import frontend from "./frontend.png";
import soft_skill from "./soft_skill.png";
import tools from "./tools.png";
import satish_hero_img from "./satish_hero_img.png";
import satish_resume from "./satish1002.pdf";
//--------------------------------------------Projects--------------------images

import student_img from "./student_img.jpg";
import e_commerce_img from "./e_commerce_img.jpg";
import twitter_clone_img from "./twiter_clone_img.jpg";
import finance_img from "./finance_img.jpg";
import easefame_img from "./easefame_img.jpg";
import agency_img from "./agnecy_img.jpg";
import college_img from "./college_img.jpg";
import nxt_trendz_img from "./nxt_trendz_img.png";

//----------------------------------Certificates------------------------------images

import static_img from "./static_img.jpeg";
import responsive_img from "./responsive_img.jpeg";
import python_img from "./python_img.jpeg";
import dynamic_img from "./dynamic_img.jpeg";
import javascript_img from "./javascript_img.jpeg";
import node_img from "./Nod_img.jpeg";
import sqlite_img from "./sqlite_img.jpeg";
import df_img from "./df_img.jpeg";
import nptelcloud_img from "./nptel_cloud_img.jpg";
import npteldatascience_img from "./nptel_python_img.jpg";
import ibm_datascience_img from "./ibm_datascience_img.jpg";

//==================achievements================================================

import nxtwave_2024 from "./2024_achieve_nxtwave.mp4";
import project_expo from "./project_expo.jpg";
import nxtwave_2023 from "./2023_nxtwave.jpg";
import nipuna from "./nipun_img.jpg";
import vcube from "./v_cube.jpg";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  satish,
  satish_hero_img,
  satish_resume,
};

export const skillsMe = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML", percentage: 90 },
      { skill: "CSS", percentage: 85 },
      { skill: "JavaScript", percentage: 80 },
      { skill: "React.js", percentage: 75 },
    ],
  },
  {
    title: "Backend",
    icon: backend_img,
    skills: [
      { skill: "Python", percentage: 90 },
      { skill: "Node.js", percentage: 85 },
      { skill: "SQLite", percentage: 80 },
      { skill: "MySQL", percentage: 78 },
      { skill: "Express.js", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: tools,
    skills: [
      { skill: "Git & GitHub", percentage: 85 },
      { skill: "Postman", percentage: 75 },
      { skill: "VS Code", percentage: 80 },
      { skill: "ESLint", percentage: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft_skill,
    skills: [
      { skill: "Problem-Solving", percentage: 85 },
      { skill: "Team Collaboration", percentage: 80 },
      { skill: "Project Planning", percentage: 90 },
      { skill: "Adaptability", percentage: 80 },
    ],
  },
];
export const PROJECTS = [
  {
    id: 1,
    image: student_img,
    title: "Student Online Feedback System",
    tags: ["Node.js", "Express.js", "MySQL", "Nodemailer"],
    description:
      "A system for students and alumni to provide feedback and track attendance, with automated email notifications.",
  },
  {
    id: 2,
    image: finance_img,
    title: "Personal Finance Manager API",
    tags: ["Node.js", "Express.js", "SQLite", "REST API"],
    description:
      "A RESTful API for managing personal financial records, including adding, retrieving, updating, and deleting transactions.",
  },
  {
    id: 3,
    image: twitter_clone_img,
    title: "Twitter Clone API",
    tags: ["Node.js", "Express.js", "MongoDB"],
    description:
      "A backend API for a Twitter-like social media platform, supporting user authentication, tweets, and likes.",
  },
  {
    id: 4,
    image: college_img,
    title: "College Security Management API",
    tags: ["Node.js", "Express.js", "MySQL"],
    description:
      "A visitor management API for colleges, allowing security staff to approve or reject visitor requests with email notifications.",
  },
  {
    id: 5,
    image: nxt_trendz_img,
    title: "NxtTrendz Authentication",
    tags: ["React.js", "Node.js", "Express.js", "JWT"],
    description:
      "A full-stack e-commerce website authentication system with JWT-based user login and session management.",
  },
  {
    id: 6,
    image: e_commerce_img,
    title: "E-Commerce Shopping Website",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A full-fledged e-commerce platform with product listings, cart management, and order processing.",
  },
  {
    id: 7,
    image: easefame_img,
    title: "Easfame Website",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "A modern business website developed for Easfame, featuring responsive design and SEO optimization.",
  },
  {
    id: 8,
    image: agency_img,
    title: "Aletqan Nepal Employment Agency",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "A corporate website for AlTetqan Nepal Employment Agency, showcasing services and job opportunities.",
  },
];

export const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    text: "I was extremely pleased with the quality of the product. It exceeded my expectations and provided great value for the price.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    text: "The customer service was excellent. They were responsive and helpful throughout the entire process, making it a smooth experience for me.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Johnson",
    text: "The attention to detail in their work is impressive. Every aspect of the project was handled with precision and care. I highly recommend their services.",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    text: "The team demonstrated a deep understanding of my requirements. They were able to capture the essence of my vision and deliver a product that exceeded my expectations.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Miller",
    text: "The product not only met but exceeded my expectations. It's clear that the team is dedicated to delivering high-quality work. I'm a satisfied customer.",
  },
];
export const CERTIFICATES = [
  {
    id: 1,
    image: static_img,
    title: "Static Website Development",
    provider: "NxtWave",
    description:
      "Certification in developing responsive static websites using HTML, CSS, and Flexbox.",
  },
  {
    id: 10,
    image: npteldatascience_img,
    title: "Python for Data Science",
    provider: "NPTEL",
    description:
      "Certified in using Python for data analysis, machine learning, and data visualization techniques.",
  },

  {
    id: 2,
    image: dynamic_img,
    title: "Dynamic Website Development",
    provider: "NxtWave",
    description:
      "Hands-on experience in building dynamic websites with JavaScript and DOM manipulation.",
  },
  {
    id: 9,
    image: nptelcloud_img,
    title: "Cloud Computing",
    provider: "NPTEL",
    description:
      "Certification in Cloud Computing fundamentals, including virtualization, cloud services, and deployment models.",
  },
  {
    id: 3,
    image: javascript_img,
    title: "JavaScript Essentials",
    provider: "NxtWave",
    description:
      "Certification covering core JavaScript concepts, ES6 features, and asynchronous programming.",
  },
  {
    id: 4,
    image: python_img,
    title: "Python Programming",
    provider: "NxtWave",
    description:
      "Certified in Python programming, covering fundamental concepts and problem-solving techniques.",
  },
  {
    id: 5,
    image: node_img,
    title: "Node.js & Express.js",
    provider: "NxtWave",
    description:
      "Certificate in backend development using Node.js and Express.js, including RESTful API design.",
  },

  {
    id: 6,
    image: sqlite_img,
    title: "SQLite & Database Management",
    provider: "NxtWave",
    description:
      "Certification in SQLite and database design, including queries, joins, and database optimization.",
  },
  {
    id: 11,
    image: ibm_datascience_img,
    title: "IBM 101: AI & Data Science",
    provider: "IBM",
    description:
      "Certification covering AI, machine learning, and data science fundamentals using IBM tools and platforms.",
  },
  {
    id: 7,
    image: responsive_img,
    title: "Responsive Web Design",
    provider: "NxtWave",
    description:
      "Certified in creating mobile-friendly and responsive web pages using CSS Flexbox and Grid.",
  },
  {
    id: 8,
    image: df_img,
    title: "Developer Foundation",
    provider: "NxtWave",
    description:
      "Certification covering Git, GitHub, command-line basics, and foundational developer tools.",
  },
];

export const STATS = [
  { id: "02", count: "2046+", label: "Total Code \nSubmissions" },
  { id: "01", count: "12+", label: "Certificates \nAchieved" },
  { id: "03", count: "6+", label: "Projects \nCompleted" },
  { id: "04", count: "45394+", label: "Minutes of \nLearning" },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Nipuna Coding Contest Winner",
    description: "Secured 1st place in the Nipuna Coding Contest using Python.",
    mediaType: "image",
    mediaSrc: nipuna,
  },
  {
    id: 2,
    title: "Project Expo - 1st Prize",
    description:
      "Won 1st prize in the national-level project expo at my college.",
    mediaType: "image",
    mediaSrc: project_expo,
  },
  {
    id: 3,
    title: "Internship Top Performer",
    description:
      "Recognized as the Top Performer during my internship at V CUBE Software Solutions.",
    mediaType: "image",
    mediaSrc: vcube,
  },
  {
    id: 4,
    title: "NxtWave Learning Record (2023)",
    description:
      "Completed 2046+ code submissions, 189 active days, and spent 43000+ minutes coding in 2023.",
    mediaType: "image",
    mediaSrc: nxtwave_2023,
  },
  {
    id: 5,
    title: "NxtWave Coding Achievement (2024)",
    description:
      "Submitted 17,968,077 bytes of code and solved 874 problems in 2024.",
    mediaType: "video/mp4",
    mediaSrc: nxtwave_2024,
  },
];
