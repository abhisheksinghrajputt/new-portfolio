// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p className="text-gray-600">
          Hello! I'm Abhishek, a passionate and aspiring developer on a journey
          to create impactful web solutions. Here's a little more about me.
        </p>
        <br />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Narrative */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold text-green-500">
              My Journey
            </h2>
            <p className="text-md text-gray-700 text-justify">
              I am an Aspiring Full-Stack Developer currently pursuing a B.Tech in Computer Science at the Geetanjali Institute of Technical Studies in Udaipur. My core skills are centered around the MERN stack, including React.js, Node.js, and MongoDB. I have built several projects that showcase these skills, from an IoT-based monitoring system to various web applications. Beyond coding, I enjoy exploring new technology, writing, and playing volleyball.
            </p>
          </div>

          {/* Right Side - Key Information */}
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-xl font-semibold text-green-500">
              Key Information
            </h2>
            <div className="flex flex-col">
              <p className="font-semibold"><strong>Name:</strong> Abhishek Kumar </p>
              <p className="font-semibold"><strong>Education:</strong> B.Tech, Computer Science Engineering (Pursuing) </p>
              <p className="font-semibold"><strong>Institute:</strong> Geetanjali Institute of Technical Studies (GITS), Udaipur </p>
              <p className="font-semibold"><strong>Location:</strong> Udaipur, Rajasthan </p>
              <p className="font-semibold"><strong>Email:</strong> abhiskekkumar620@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;