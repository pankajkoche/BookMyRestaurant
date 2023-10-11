
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-2xl md:text-3xl lg:text-3xl">
            {/* Apply the desired cursive font */}
            <span className="font-cursive">Book</span><span className='text-yellow-300'>MyRestraunt</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {/* Hidden on small screens, visible on medium and larger screens */}
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>

          {/* Responsive Menu Button */}
          <div className="md:hidden">
            {/* Show this button on small screens */}
            <button className="text-white">
              {/* You can use an icon library like FontAwesome for the burger icon */}
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;