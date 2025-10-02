// src/assets/components/Home.jsx

import React from "react";
import profilePic from "../image/image.jpg";
import resume from "../image/my-resume.pdf";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Content Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl">Welcome To My Portfolio</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-green-500 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-md text-gray-600 text-justify">
              I am a passionate Web Developer with a knack for creating dynamic
              and responsive web applications. I specialize in the MERN stack
              and am dedicated to writing clean, efficient, and scalable code.
            </p>
            <br />

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#projects"
                className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 duration-300"
              >
                View My Work
              </a>
              <a
                href={resume}
                download="Abhishek-Resume.pdf"
                className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 duration-300"
              >
                Download CV
              </a>
            </div>
            <br />

            {/* Social and Tech Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 mt-4">
              {/* Social Media Links */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Find me on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Icons */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Tech Stack</h1>
                <div className="flex space-x-5">
                  <SiMongodb
                    size={28}
                    className="text-green-800 rounded-full cursor-pointer hover:scale-110 duration-300"
                    title="MongoDB"
                  />
                  <SiExpress
                    size={28}
                    className="rounded-full cursor-pointer hover:scale-110 duration-300"
                    title="Express.js"
                  />
                  <SiReact
                    size={28}
                    className="text-sky-500 rounded-full cursor-pointer hover:scale-110 duration-300"
                    title="React"
                  />
                  <SiNodedotjs
                    size={28}
                    className="text-green-600 rounded-full cursor-pointer hover:scale-110 duration-300"
                    title="Node.js"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-12 md:mt-20 mt-8 order-1 flex justify-center">
            <img
              src={profilePic}
              className="rounded-full w-[300px] h-[300px] md:w-[420px] md:h-[420px] object-cover shadow-lg"
              alt="Abhishek's profile picture"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
