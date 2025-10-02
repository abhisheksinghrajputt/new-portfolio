

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  // State to manage the mobile menu's visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Array of navigation links for easy mapping
  const navLinks = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Skills', href: '#skills' },
    { id: 4, text: 'Projects', href: '#projects' },
    { id: 5, text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold cursor-pointer">
          Abhishe<span className="text-green-500">k.</span>
          
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, text, href }) => (
            <li key={id}>
              <a
                href={href}
                className="font-semibold text-gray-700 hover:text-green-500 duration-300"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu - Slides in from the top */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center">
          {navLinks.map(({ id, text, href }) => (
            <li key={id} className="w-full text-center">
              <a
                href={href}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block py-4 font-semibold text-gray-700 hover:bg-green-500 hover:text-white duration-300"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;