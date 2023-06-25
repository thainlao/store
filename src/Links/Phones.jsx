import React, { useState, useEffect } from "react";
import img from '../assets/iphone1.png';

const Phones = ({ onBuyClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleBuyClick = (newPrice, name) => {
    onBuyClick(newPrice, { amount: newPrice, name });
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="flex justify-center elementsbg py-48 md:py-1 lg:py-1 sm:py-1 flex-wrap items-center gap-5 min-h-screen">
      {isLoading ? (
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      ) : (
        <>
          <div
            className={`w-64 h-72 rounded shadow-sm shadow-[#948c8c] overflow-hidden mx-2 cardsbg`}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={handleCardLeave}
          >
            <div className="px-6 py-4">
              <div className="font-bold items-center flex justify-center text-xl mb-2">iPhone 15 </div>
              <div className="flex items-center justify-center">
              <img className="lg:w-32 py-2 w-32 h-32 lg:h-32" src={img} alt="Card image" />
            </div>
              <p className="text-gray-700 items-center flex justify-center text-base">85 000 ₽</p>
              <div className={`flex items-center justify-center h-16 ${hoveredCard === 1 ? 'visible' : 'invisible'}`}>
                <button
                  className="h-12 w-28 rounded-full shadow-md shadow-black text-white
                  transition ease-in-out delay-50 bg-[#5b566b] hover:bg-[#78718d]"
                  onClick={() => handleBuyClick(85000, 'iPhone 15')}
                >
                  Купить
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-64 h-72 rounded border shadow-[#948c8c] overflow-hidden shadow-sm mx-2 cardsbg`}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={handleCardLeave}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl items-center flex justify-center mb-2">iPhone 13</div>
              <div className="flex items-center justify-center">
              <img className="lg:w-32 py-2 w-32 h-32 lg:h-32" src={img} alt="Card image" />
            </div>
              <p className="text-gray-700 items-center flex justify-center text-base">64 000 ₽</p>
              <div className={`flex items-center justify-center h-16 ${hoveredCard === 2 ? 'visible' : 'invisible'}`}>
                <button
                  className="h-12 w-28 rounded-full shadow-md shadow-black text-white
                  transition ease-in-out delay-50 bg-[#5b566b] hover:bg-[#78718d]"
                  onClick={() => handleBuyClick(64000, 'iPhone 13')}
                >
                  Купить
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-64 h-72 rounded overflow-hidden shadow-sm shadow-[#948c8c] mx-2 cardsbg`}
            onMouseEnter={() => handleCardHover(3)}
            onMouseLeave={handleCardLeave}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl items-center flex justify-center mb-2">iPhone 13 Pro Max</div>
              <div className="flex items-center justify-center">
              <img className="lg:w-32 py-2 w-32 h-32 lg:h-32" src={img} alt="Card image" />
            </div>
              <p className="text-gray-700 items-center flex justify-center text-base">110 000 ₽</p>
              <div className={`flex items-center justify-center h-16 ${hoveredCard === 3 ? 'visible' : 'invisible'}`}>
                <button
                  className="h-12 w-28 rounded-full shadow-md shadow-black text-white
                  transition ease-in-out delay-50 bg-[#5b566b] hover:bg-[#78718d]"
                  onClick={() => handleBuyClick(110000, 'iPhone 13 Pro Max')}
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Phones;
