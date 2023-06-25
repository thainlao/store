import React, { useState, useEffect } from "react";
import laptop from '../assets/ноутбук.png';
import tablet from '../assets/планшет.png';
import phone from '../assets/телефон.png';
import xbox from '../assets/консоли.png';
import airpods from '../assets/наушники.png';
import pc from '../assets/компьютер.png';
import iphone from '../assets/iphone1.png';
import macbook from '../assets/macbook1.png';
import xbox1 from '../assets/xbox1.png';
import watch from '../assets/pc.png';
import planshet from '../assets/planshet.png';
import airpods1 from '../assets/airpods1.png';
import Swings from "./Swings";
import logo from '../assets/logo.png';
import Delivery from "./Delivery";
import Money from "./Money";
import End from "./End";
import scrollpng from '../assets/scroll.png';
import { Navigate, useNavigate } from "react-router-dom";

function Mainbody() {
  const [showButton, setshowButton ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setshowButton(true)
      } else {
        setshowButton(false)
      }
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="flex justify-center mainbodybg flex-wrap lg:py-1 md:py-1 py-20">
      <div className="text-center py-5">
      <p className="py-5 text-3xl font-semibold text-[white] ml-6 flex justify-start">Популярные новинки</p>
        <div className="flex-container gap-5 py-3 flex">
          <div onClick={function() {navigate('/consoles')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
          <p className="lg:text-xl  font-medium">Xbox one X</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={xbox1} alt="Image" /></div>
            <p className="lg:text-xl font-light">Лучшая игровая консоль на рынке</p>
            <p className="lg:text-xl font-medium">49 999 ₽</p>
          </div>
          <div onClick={function() {navigate('/headset')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
            <p className="lg:text-xl  font-medium">Airpods PRO</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={airpods1} alt="Image" /></div>
            <p className="lg:text-xl font-light">Лучший звук 2023 года</p>
            <p className="lg:text-xl font-medium">120 000 ₽</p>
          </div>
          <div onClick={function() {navigate('/laptops')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
          <p className="lg:text-xl  font-medium">Macbook Pro 13 (M2)</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={macbook} alt="Image" /></div>
            <p className="lg:text-xl font-light">Современный и модный дизайн</p>
            <p className="lg:text-xl font-medium">120 000 ₽</p>
          </div>
        </div>
        <div className="py-10 flex-container gap-5 ">
        <div onClick={function() {navigate('/iphones')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
          <p className="lg:text-xl  font-medium">iPhone 13</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={iphone} alt="Image" /></div>
            <p className="lg:text-xl font-light">Проверенный временем!</p>
            <p className="lg:text-xl font-medium">69 990 ₽</p>
          </div>
          <div onClick={function() {navigate('/pcs')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
          <p className="lg:text-xl  font-medium">Asus Rog PC</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={watch} alt="Image" /></div>
            <p className="lg:text-xl font-light">Лучший пк 2023 года</p>
            <p className="lg:text-xl font-medium">185 000 ₽</p>
          </div>
          <div onClick={function() {navigate('/ipads')}} className="card bg-[#f0efe8]
          cursor-pointer cardsbg shadow-md shadow-[#ada3a3] border-opacity-50 p-4">
          <p className="lg:text-xl  font-medium">iPad PRO</p>
            <div className="flex justify-center"><img className="lg:h-40 lg:w-40 md:h-36 md:w-36 h-12 w-12" src={planshet} alt="Image" /></div>
            <p className="lg:text-xl font-light">Новинка в сфере планшетов</p>
            <p className="lg:text-xl font-medium">55 999 ₽</p>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-6 items-center">
          <Swings />
          <Delivery />
          <Money />
        </div>
      </div>
      {showButton && (
        <button
          className='fixed bottom-4 expand right-4 py-2 px-4 transition-opacity' 
          onClick={scrollToTop}
        >
          <img 
            src={scrollpng} 
            className="h-9 w-9 bg-[#f0efe8] rounded-full"
            alt='scroll'
          />
        </button>
      )}
    </div>
  );
}

export default Mainbody;
