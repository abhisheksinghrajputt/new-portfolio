// src/components/Contact.jsx

import React from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">Contact Me</h1>
      <p className="text-gray-600 mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl font-semibold text-green-500">Get in Touch Directly</h2>
          <div className="flex items-center gap-4">
            <IoMail size={24} />
            <a href="mailto:abhishekshrajputt@gmail.com" className="text-gray-700 hover:text-green-500 duration-200">
              abhishekshrajputt@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <IoCall size={24} />
            <a href="tel:+917050085814" className="text-gray-700 hover:text-green-500 duration-200">
              70500 85814
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-500 mt-8 mb-4">Find me on Social Media</h2>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/abhishek-kumar-550196328" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaLinkedin size={32} />
              </a>
              <a href="https://github.com/abhisheksinghrajputt" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-green-500 mb-4">Send Me a Message</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> {/* <-- IMPORTANT: REPLACE THIS VALUE */}

            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-semibold">Your Name</label>
              <input type="text" id="name" name="name" required className="border-[2px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">Your Email</label>
              <input type="email" id="email" name="email" required className="border-[2px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-semibold">Message</label>
              <textarea id="message" name="message" required rows="5" className="border-[2px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;