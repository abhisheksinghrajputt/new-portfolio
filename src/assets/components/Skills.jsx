// src/components/Skills.jsx

import React from "react";
// Importing icons from react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";


const Skills = () => {
  // Array of skills with information and citations from your resume
  const skillsList = [
    // Web Development
    { id: 1, name: "HTML", icon: <FaHtml5 size={60} />, category: "Web Development" },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={60} />, category: "Web Development" },
    { id: 3, name: "JavaScript", icon: <IoLogoJavascript size={60} />, category: "Web Development" },
    { id: 4, name: "React.js", icon: <FaReact size={60} />, category: "Web Development" },
    { id: 5, name: "Bootstrap", icon: <FaBootstrap size={60} />, category: "Web Development" },
    { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss size={60} />, category: "Web Development" },
    // Backend
    { id: 7, name: "Node.js", icon: <FaNodeJs size={60} />, category: "Backend" },
    { id: 8, name: "Express.js", icon: <SiExpress size={60} />, category: "Backend" },
    // Database
    { id: 9, name: "MongoDB", icon: <SiMongodb size={60} />, category: "Database" },
    // Tools
    { id: 10, name: "Git", icon: <FaGitAlt size={60} />, category: "Tools" },
    { id: 11, name: "GitHub", icon: <FaGithub size={60} />, category: "Tools" },
    { id: 12, name: "Postman API", icon: <SiPostman size={60} />, category: "Tools" },
    { id: 13, name: "Docker", icon: <FaDocker size={60} />, category: "Tools" },
    // Programming
    { id: 14, name: "C", icon: <FaCode size={60} />, category: "Programming" },
    { id: 15, name: "C++", icon: <TbBrandCpp size={60} />, category: "Programming" },
  ];

  const categories = [
    "Web Development",
    "Backend",
    "Database",
    "Tools",
    "Programming",
  ];

  return (
    <div
      id="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">Technical Skills</h1>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4 text-green-500">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillsList
                .filter((skill) => skill.category === category)
                .map(({ id, name, icon }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center p-4 border-[2px] rounded-lg shadow-md hover:scale-105 duration-300 cursor-pointer"
                  >
                    {icon}
                    <p className="mt-2 text-center font-semibold">{name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;