import React, { useState, useEffect } from 'react';
import styles from '../styles/swings.css';

function Money() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsIntersecting(true);
          }, 300);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(document.getElementById('swings'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="swings" className={`swings flex items-center shadow-md shadow-[#ada1a1] justify-between ${isIntersecting ? 'intersecting' : ''}`}>
      <div className={`photo2 ml-4 w-60 h-60 ${isIntersecting ? 'loaded' : ''}`} />
      <div className={`text ${isIntersecting ? 'loaded' : ''}`}>
        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl font-medium">Низкие цены</p>
          <span className="text-xl font-light">Качественные товары за самую низкую цену на рынке</span>
        </div>
      </div>
    </div>
  );
}

export default Money;