import React from "react";
import laptop from '../assets/ноутбук.png';
import tablet from '../assets/планшет.png';
import phone from '../assets/телефон.png';
import xbox from '../assets/консоли.png';
import airpods from '../assets/наушники.png';
import pc from '../assets/компьютер.png';
import logo from '../assets/logo.png';
import { BrowserRouter as Router, Link, Route, useLocation } from "react-router-dom";

function LeftContainer() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isLoginRoute1 = location.pathname === '/dashboard';
  if (isLoginRoute) {
    return null;
  }

  if (isLoginRoute1) {
    return null;
  }

  return (
    <div className="flex py-9">
      <div
        style={{ width: '5%', height: '100vh', position: 'fixed', top: 0, left: 0 }}
        className="bg-[#f0efe8] hidden lg:block"
      >
        <div className="flex items-center gap-6 flex-col py-28">
          <Link to='/mainbody'>
            <img src={logo} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/ipads'>
            <img src={tablet} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/phones'>
            <img src={phone} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/laptops'>
            <img src={laptop} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/consoles'>
            <img src={xbox} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/headset'>
            <img src={airpods} className="w-12 h-12 cursor-pointer expand" />
          </Link>
          <Link to='/pcs'>
            <img src={pc} className="w-12 h-12 cursor-pointer expand" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;