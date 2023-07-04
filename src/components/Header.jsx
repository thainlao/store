import React, { useState, useEffect } from "react";
import korzina from '../assets/korzina.png';
import loginpng from '../assets/login.png';
import { Link, useLocation } from "react-router-dom";
import laptop from '../assets/ноутбук.png';
import tablet from '../assets/планшет.png';
import phone from '../assets/телефон.png';
import xbox from '../assets/консоли.png';
import airpods from '../assets/наушники.png';
import pc from '../assets/компьютер.png';
import logo from '../assets/logo.png';

function Header({ price, cartQuantity, korzCount, isLoggedIn }) {  
  const [isVisible, setIsVisible] = useState(true);
  const [formattedPrice, setFormattedPrice] = useState(price.toLocaleString());
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(null);
  const isMobile = window.innerWidth <= 768;
  

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setIsVisible(isVisible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
      setFormattedPrice(price.toLocaleString());
  }, [price, location]);

  useEffect(() => {
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);


  return (
    <div
      className={`header fixed z-50 w-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap justify-start items-center bg-[#f0efe8] font-light  lg:font-normal lg:text-xl text-[10px] md:text-sm lg:py-6 md:py-6 lg:gap-6 md:gap-6 gap-5 text-[black]">
      <Link to='/' className="lg:ml-6 md:ml-6 cursor-pointer expand">
        {isMobile ? (
          <img src={logo} alt="Меню" className="w-8 h-8" />
        ) : (
          'Меню'
        )}
      </Link>
      <Link to='/phones' className="cursor-pointer expand">
        {isMobile ? (
          <img src={phone} alt="Телефоны" className="w-8 h-8" />
        ) : (
          'Телефоны'
        )}
      </Link>
      <Link to='/laptops' className="cursor-pointer expand">
        {isMobile ? (
          <img src={laptop} alt="Ноутбуки" className="w-8 h-8" />
        ) : (
          'Ноутбуки'
        )}
      </Link>
      <Link to='/ipads' className="cursor-pointer expand">
        {isMobile ? (
          <img src={tablet} alt="Планшеты" className="w-8 h-8" />
        ) : (
          'Планшеты'
        )}
      </Link>
      <Link to='/pcs' className="cursor-pointer expand">
        {isMobile ? (
          <img src={pc} alt="Готовые ПК" className="w-8 h-8" />
        ) : (
          'Готовые ПК'
        )}
      </Link>
      <Link to='/consoles' className="cursor-pointer expand">
        {isMobile ? (
          <img src={xbox} alt="Приставки" className="w-8 h-8" />
        ) : (
          'Приставки'
        )}
      </Link>
      <Link to='/headset' className="cursor-pointer expand">
        {isMobile ? (
          <img src={airpods} alt="Наушники" className="w-8 h-8" />
        ) : (
          'Наушники'
        )}
      </Link>
        <div className="mx-auto flex gap-10"></div>
        <div className="items-center mr-4 flex font-bold flex-col">
          <p>Cумма заказа:</p>
          <p>{formattedPrice}</p>
        </div>
        <Link to='/korzina'>
          <div className="relative">
            <img src={korzina} className="mr-4 w-8 h-8 cursor-pointer" alt="Корзина" />
            <div className="flex mr-3 justify-center items-center">
              {korzCount > 0 ? (
                <p className="rounded-full text-sm bg-[red] h-5 w-6 items-center flex justify-center
              border border-black border-opacity-50">{korzCount}</p>
              ) : (
                <p className="text-sm">Пусто</p>
              )}
            </div>
            {cartQuantity > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full px-2 text-xs">{cartQuantity}</span>
            )}
          </div>
          </Link>
          {isLoggedIn ? (
             <Link to="/dashboard" className="flex  flex-col justify-center items-center">
                {profileImage ? (
                  <img src={profileImage} className="mr-4 w-8 h-8 cursor-pointer" alt="Логин" />
                ) : (
                  <img src={loginpng} className="mr-4 w-8 h-8 cursor-pointer" alt="Логин" />
                )}
                <p className="text-sm mr-4">Мой аккаунт</p>
              </Link>
            ) : (
              <Link to="/login" className="flex flex-col justify-center items-center">
                <img src={loginpng} className="mr-4 w-8 h-8 cursor-pointer" alt="Логин" />
                <p className="text-sm mr-4">Войдите</p>
                </Link>
        )}
      </div>
      <hr className="bg-[black] p-[1px]" />
    </div>
  );
}

export default Header;
