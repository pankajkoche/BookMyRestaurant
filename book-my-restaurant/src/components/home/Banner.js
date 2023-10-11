import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white ">
      <div className="container mx-auto flex justify-between items-center h-">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-2">Plan Your Perfect Date</h1>
          <p className="text-lg mb-4">
            Find the perfect date place for your special occasion.
          </p>
          <button
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white"
          >
            Book Now
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/couple-on-romantic-dinner-date-5564026-4642495.png"
            alt="Book Your Perfect Date"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
