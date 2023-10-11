import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < rating ? 'text-orange-500' : 'text-gray-300'}
      />
    );
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
