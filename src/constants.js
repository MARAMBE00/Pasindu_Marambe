// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import aasl from './assets/company_logo/aasl.png';

// Education Section Logo's
import iit from './assets/education_logo/iit.png';
import thurstan from './assets/education_logo/thurstan.png';

// Project Section Logo's
import keratoScanAI from './assets/work_logo/keratoScanAI.jpeg';
import nephroAI from './assets/work_logo/nephroAI.png';
import weatherWebApplication from './assets/work_logo/weatherWebApplication.png';
import PHPbasedECommerceSystem from './assets/work_logo/PHP-basedE-CommerceSystem.png';
import ToDoListWebApplication from './assets/work_logo/To-DoListWebApplication.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C#', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aasl,
    role: "Software Engineer Intern",
    company: "Airport and Aviation Services (SL) (Pvt) Ltd",
    date: "Sep 2023 - Aug 2024",
    desc: "Designed and developed robust desktop applications using C# with WPF and Windows Forms, focusing on real-time video streaming, system monitoring, and digital content management. Contributed to full-cycle development of admin panels with CRUD operations, ensuring high performance and seamless user experience in enterprise environments.",
    skills: [
      "C#",
      "Python",
      "WPF (Windows Presentation Foundation) Applications",
      "Windows Form Applications",
      "MSSQL",
    ],
  },
];
  
export const education = [
  {
    id: 0,
    img: iit,
    school: " Informatics Institute of Technology affiliated with the University of Westminster, UK",
    date: "Sep 2021 - Nov 2025 ",
    grade: "- GPA",
    desc: "I have completed my BSc (Hons) in Computer Science from the Informatics Institute of Technology, affiliated with the University of Westminster, UK. Throughout the program, I built a strong foundation in programming, software engineering, web development, databases, and AI. I worked on several individual and group projects, including deep learning–based medical applications and full-stack web solutions, which helped me apply theory to real-world problems and enhance my technical and collaborative skills.",
    degree: "BSc (Hons) Computer Science",
  },
  {
    id: 1,
    img: thurstan,
    school: "Thurstan College, Colombo 07",
    date: "Aug 2020",
    grade: "Maths Stream - 3C",
    desc: "I completed my G.C.E. Advanced Level Examination in the Mathematics stream at Thurstan College, Colombo 07, with passes in Combined Mathematics, Chemistry, and Physics (all C grades).",
    degree: "G.C.E Advanced Level Examination",
  },
  {
    id: 2,
    img: thurstan,
    school: "Thurstan College, Colombo 07",
    date: "Dec 2016",
    grade: "8A, 1B",
    desc: "I completed my G.C.E. Ordinary Level Examination at Thurstan College, Colombo 07, achieving excellent results with 8 A’s and 1 B.",
    degree: "G.C.E Ordinary Level Examination",
  },
];
  
export const projects = [
  {
    id: 0,
    title: "KeratoScan AI",
    description:
      "KeratoScan AI is an AI-driven diagnostic tool designed to detect early-stage keratoconus—a progressive eye disease—using corneal topography images. Leveraging the NASNet deep learning architecture, this system offers accurate classification alongside a user-friendly, multi-role web interface suitable for medical professionals.",
    image: keratoScanAI,
    tags: ["React JS", "TypeScript", "Python", "Flask", "TensorFlow", "Keras", "Scikit-learn", "Firebase Firestore"],
    github: "https://github.com/MARAMBE00/Early-Stage_Keratoconus_Detection.git",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Nephro AI",
    description:
      "Nephro AI is a website that uses CT scan images to identify kidney tumors, stones, and cysts among other diseases. Anyone can use the website because of how user-friendly it is. An open-source JavaScript library for building user interfaces, the React JS framework was used to create the Nephro AI website.",
    image: nephroAI,
    tags: ["React JS", "Node.js", "JavaScript"],
    github: "https://github.com/MARAMBE00/Multiple-Kidney-Disease-Detection.git",
    // webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Weather Web Application",
    description:
      "A clean and responsive browser-based app built with HTML, CSS, and JavaScript. It enables users to search for any city worldwide and view real-time weather data fetched from the OpenWeatherMap API.",
    image: weatherWebApplication,
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "OpenWeatherMap API"],
    github: "https://github.com/MARAMBE00/Weather_Web_Application.git",
    // webapp: "https://csprep.netlify.app/",
  },
  {
    id: 3,
    title: "PHP-based E-Commerce System",
    description:
      "A simple PHP-based e-commerce web application that allows users to browse products, manage shopping carts, and complete purchases with user authentication and MySQL backend.",
    image: PHPbasedECommerceSystem,
    tags: ["PHP", "HTML5", "CSS", "Bootstrap", "MySQL"],
    github: "https://github.com/MARAMBE00/PHP-based_E-Commerce_System.git",
    // webapp: "https://csprep.netlify.app/",
  },
  {
    id: 4,
    title: "To-Do List Web Application",
    description:
      "A lightweight and interactive web app built with PHP and MongoDB that enables users to create, view, update, and delete tasks, implementing full CRUD functionality in a user-friendly interface.",
    image: ToDoListWebApplication,
    tags: ["PHP", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/MARAMBE00/ToDo_List_WebApplication.git",
    // webapp: "https://csprep.netlify.app/",
  },
];  