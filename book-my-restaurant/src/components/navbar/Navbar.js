import React, { useState } from 'react';
import { FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 p-4 w-full text-white  top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-3xl">
          <span className="font-cursive text-orange-400">Book</span>
          <span className="">MyRestraunt</span>
        </div>
        <div className={`md:flex space-x-4 hidden`}>
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {!isOpen && <FaBars className="text-2xl cursor-pointer" />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed right-0 top-0 w-full h-full bg-white z-20">
          <div className="flex flex-col items-start p-4">
            <button
              className="absolute top-2 right-2 text-xl text-gray-600"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
            <a href="#" className="text-blue-500 text-xl font-semibold mb-4">
              Home
            </a>
            <a href="#" className="text-blue-500 text-xl font-semibold mb-4">
              About
            </a>
            <a href="#" className="text-blue-500 text-xl font-semibold mb-4">
              Services
            </a>
            <a href="#" className="text-blue-500 text-xl font-semibold">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
