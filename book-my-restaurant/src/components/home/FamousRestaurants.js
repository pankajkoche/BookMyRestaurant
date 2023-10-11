import React from 'react';
import StarRating from '../shared/StarRating';
const famousRestaurants = [
    {
      name: "Le Jules Verne",
      image: "https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png",
      description: "Experience gourmet dining with breathtaking views of the Eiffel Tower.",
      rating: 4.5,
    },
    {
      name: "Noma",
      image: "https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg",
      description: "Explore the world of modern Nordic cuisine at one of the best restaurants in the world.",
      rating: 5.0,
    },
    {
      name: "The French Laundry",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/27/9f/45/bc/restaurant.jpg",
      description: "Savor the flavors of farm-to-table cuisine in Napa Valley's iconic restaurant.",
      rating: 3.8,
    },
];
const FamousRestaurants = () => {
    const displayRestaurants = famousRestaurants.slice(0, 3);

  return (
    <div className="flex flex-wrap bg-gray-100">
      {displayRestaurants.map((restaurant, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg px-6 py-2 shadow-md h-full">
            <div className="text-center">
              <h1 className="text-2xl font-bold ">{restaurant.name}</h1>
              <StarRating rating={restaurant.rating} />
            </div>
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover mt-2 rounded-lg" />
            <p className="mt-4 text-gray-600">{restaurant.description}</p>
            <button className="bg-orange-500 text-white py-2 px-4 mt-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-200">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamousRestaurants;