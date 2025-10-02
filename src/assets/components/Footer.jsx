// src/components/Footer.jsx

import React from "react";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-50">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social media icons */}
            <div className="flex space-x-4 mb-4">
              <a href="https://linkedin.com/in/abhishek-kumar-550196328" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/abhisheksinghrajputt" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaFacebookSquare size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaInstagramSquare size={24} />
              </a>
            </div>

            {/* Copyright information */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                &copy; 2025 Abhishek Kumar.  All rights reserved.
              </p>
              <p className="text-sm text-gray-600">
                Designed and Developed with ❤️ by Abhishek Kumar.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;