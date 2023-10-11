import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card';

const cardData = [
  {
    title: 'Card 1',
    description: 'This is the first card.',

    image: 'https://njmonthly.com/wp-content/uploads/cache/2019/01/flat-lay-2583212_960_720/157487089.jpg',
  },
  {
    title: 'Card 2',
    description: 'This is the second card.',
  
    image: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*',
  },
  {
    title: 'Card 3',
    description: 'This is the third card.',
    
    image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/2021-06/halal-food%C2%A9iStock.jpg?itok=xbzpuHYv',
  },
  {
    title: 'Card 4',
    description: 'This is the fourth card.',
    
    image: 'https://evofoods.in/cdn/shop/files/home_landing_900x_0df7bc14-1047-4159-8b4a-cefb1d9ceccf.jpg?v=1652775677',
  },
  {
    title: 'Card 5',
    description: 'This is the fifth card.',
 
    image: 'https://cdn.techinasia.com/wp-content/uploads/2020/08/43419121_m.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the first card.',

    image: 'https://njmonthly.com/wp-content/uploads/cache/2019/01/flat-lay-2583212_960_720/157487089.jpg',
  },
  {
    title: 'Card 2',
    description: 'This is the second card.',
  
    image: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg?crop=0.942xw:0.707xh;0.0369xw,0.212xh&resize=1200:*',
  },
  {
    title: 'Card 3',
    description: 'This is the third card.',
    
    image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/2021-06/halal-food%C2%A9iStock.jpg?itok=xbzpuHYv',
  },
  {
    title: 'Card 4',
    description: 'This is the fourth card.',
    
    image: 'https://evofoods.in/cdn/shop/files/home_landing_900x_0df7bc14-1047-4159-8b4a-cefb1d9ceccf.jpg?v=1652775677',
  },
  {
    title: 'Card 5',
    description: 'This is the fifth card.',
 
    image: 'https://cdn.techinasia.com/wp-content/uploads/2020/08/43419121_m.jpg',
  },
  
];

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  // Calculate the indices of the 5 cards to display
  const displayedCardIndices = [
    (currentCard - 2 + cardData.length) % cardData.length,
    (currentCard - 1 + cardData.length) % cardData.length,
    currentCard,
    (currentCard + 1) % cardData.length,
    (currentCard + 2) % cardData.length,
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 ">
        <h1 className=' font-serif font-semibold text-4xl mt-6'>Famous places for food</h1>

    <div className="w-full flex items-center justify-between mt-8">
      <button onClick={prevCard} className="mx-2">
        <FiChevronLeft size={32} />
      </button>
      <div className="flex space-x-4">
        {displayedCardIndices.map((index) => (
          <Card key={index} {...cardData[index]} />
        ))}
      </div>
      <button onClick={nextCard} className="mx-2">
        <FiChevronRight size={32} />
      </button>
    </div>
  </div>
);
};

export default CardSlider;
