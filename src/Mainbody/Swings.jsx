import React, { useState, useEffect } from 'react';

function Swings() {
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
    <div id="swings" className={`swings flex shadow-md shadow-[#ada1a1] items-center justify-between rounded-md ${isIntersecting ? 'intersecting' : ''}`}>
      <div className={`photo w-60 h-60 ${isIntersecting ? 'loaded' : ''}`} />
      <div className={`text ${isIntersecting ? 'loaded' : ''}`}>
        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl font-medium">Мы предлагаем современный сервис</p>
          <span className="text-xl font-light">Наши специалисты самостоятельно осуществлят гарантийный ремонт</span>
        </div>
      </div>
    </div>
  );
}

export default Swings;