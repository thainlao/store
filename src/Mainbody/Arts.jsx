import React, { useState, useEffect } from 'react';
import photo1 from '../2assets/photo1.png';
import photo2 from '../2assets/photo2.png';
import photo3 from '../2assets/photo3.jpg';
import photo4 from '../2assets/photo4.jpg';
import '../styles/arts.css'
const Arts = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const cardImages = [
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard % 4) + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" shadow-md flex items-center justify-center">
        <img
          src={cardImages[currentCard - 1]}
          alt={`Card ${currentCard}`}
          className={`artswidth transition-opacity duration-500 ${
            currentCard === 4 ? 'opacity-100' : 'opacity-100'
          }`}
        />
      </div>
      <div className="flex mt-4">
        <div
          className={`w-4 h-4 mx-1 rounded-full ${
            currentCard === 1 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`w-4 h-4 mx-1 rounded-full ${
            currentCard === 2 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`w-4 h-4 mx-1 rounded-full ${
            currentCard === 3 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`w-4 h-4 mx-1 rounded-full ${
            currentCard === 4 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
      </div>
    </div>
  );
};

export default Arts;
