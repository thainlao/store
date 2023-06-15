import React from "react";
import logo from '../assets/logo.png';
import korzina from '../assets/korzina.png';

function Header () {
    return (
        <div className="header">
            <div className="flex
            justify-start items-center font-light text-xl py-3 gap-6 text-[black]">
                <a href="#">
                    <img src={logo} className="w-20 h-20 expand"/>
                </a>
                <p className="cursor-pointer expand">Меню</p>
                <p className="cursor-pointer expand">Телефоны</p>
                <p className="cursor-pointer expand">Ноутбуки</p>
                <p className="cursor-pointer expand">Планшеты</p>
                <p className="cursor-pointer expand">Готовые ПК</p>
                <p className="cursor-pointer expand">Приставки</p>
                <p className="cursor-pointer expand">Наушники</p>
                <div className="mx-auto flex gap-10">
                    <div className="items-center flex flex-col expand">
                            <p>Звоните</p>
                            <span className="text-base">7 999 999-99-99</span>
                    </div>
                    <div className="items-center flex flex-col expand">
                            <p>Режим работы</p>
                            <span className="text-base">С 10: 00 до 20 : 00</span>
                    </div>
                </div>
                <img src={korzina} className="mr-4 w-8 h-8 expand cursor-pointer"/>
            </div>
            <hr className="bg-[black] p-[1px]" />
        </div>
    )
}

export default Header;
