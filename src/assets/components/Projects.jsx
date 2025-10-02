// src/components/Projects.jsx

import React from "react";
// Import placeholder images - you should replace these with your actual project screenshots
import smartFenceImg from "../assets/images/smart-fence.jpg";
import portfolioImg from "../assets/images/portfolio.jpg";
import studentMgmtImg from "../assets/images/student-mgmt.jpg";
import todoImg from "../assets/images/todo.jpg";
import weatherImg from "../assets/images/weather.jpg";
import currencyImg from "../assets/images/currency.jpg";


const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Smart Fence Guard",
      description: "Developed an IoT-based smart fence system integrating GSM connectivity with a React-based dashboard for monitoring and real-time alerts.",
      image: smartFenceImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["React", "IoT", "Backend API"]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "Built a responsive portfolio to showcase projects and skills. Deployed via GitHub Pages.",
      image: portfolioImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["React", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Student Management CRUD Backend",
      description: "Designed a backend API for student management with Create, Read, Update, and Delete operations.",
      image: studentMgmtImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["Node.js", "Express.js"]
    },
    {
      id: 4,
      title: "To-Do App",
      description: "Implemented a task management app using React with local storage for persistent data.",
      image: todoImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["React", "Local Storage"]
    },
    {
      id: 5,
      title: "Weather App",
      description: "Created a weather forecast application using external APIs for real-time data.",
      image: weatherImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["JavaScript", "External API"]
    },
    {
      id: 6,
      title: "Currency Converter",
      description: "Built a currency conversion tool with live API data fetching and responsive design.",
      image: currencyImg,
      demoLink: "#",
      sourceLink: "#",
      technologies: ["JavaScript", "External API"]
    }
  ];

  return (
    <div
      id="projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map(({ id, title, description, image, demoLink, sourceLink, technologies }) => (
          <div
            key={id}
            className="flex flex-col border-[2px] rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img src={image} className="w-full h-48 object-cover" alt={`${title} screenshot`} />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700 mb-4 flex-grow">{description}</p>
              <div className="mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                ))}
              </div>
              <div className="flex justify-start gap-4 mt-auto">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;