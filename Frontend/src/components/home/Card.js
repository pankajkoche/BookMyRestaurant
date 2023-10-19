import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white  shadow-md rounded-lg w-full h-full ">
      <div className="">
        <img src={image} alt={title} className="w-full h-48 rounded-lg object-cover" />
      </div>
      
    </div>
  );
};

export default Card;
