import React, { useState, useEffect } from "react";
import korzina from '../assets/korzina.png';
import loginpng from '../assets/login.png';
import { Link, useLocation } from "react-router-dom";

function Header({ price, cartQuantity, korzCount, isLoggedIn }) {
  const [isVisible, setIsVisible] = useState(true);
  const [formattedPrice, setFormattedPrice] = useState(price.toLocaleString());
  const location = useLocation();
  const profileImage = localStorage.getItem('profileImage');

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

  return (
    <div
      className={`header fixed w-full z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-wrap justify-start items-center bg-[#f0efe8] font-light  lg:font-normal lg:text-xl text-sm py-6 gap-6 text-[black]">
        <Link to='/' className="lg:ml-6 md:ml-6 cursor-pointer expand">Меню</Link>
        <Link to='/phones' className="cursor-pointer expand">Телефоны</Link>
        <Link to='/laptops' className="cursor-pointer expand">Ноутбуки</Link>
        <Link to='/ipads' className="cursor-pointer expand">Планшеты</Link>
        <Link to='/pcs' className="cursor-pointer expand">Готовые ПК</Link>
        <Link to='/consoles' className="cursor-pointer expand">Приставки</Link>
        <Link to='/headset' className="cursor-pointer expand">Наушники</Link>
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
                <p className="text-sm mr-4 ">Мой аккаунт</p>
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
