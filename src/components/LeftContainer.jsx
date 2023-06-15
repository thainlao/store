import React from "react";
import laptop from '../assets/ноутбук.png';
import tablet from '../assets/планшет.png';
import phone from '../assets/телефон.png';
import xbox from '../assets/консоли.png';
import airpods from '../assets/наушники.png';
import pc from '../assets/компьютер.png';

function LeftContainer() {
    return (
        <div className="flex">
        <div style={{ width: '5%', height: '100vh' }} className="bg-[#cdd4db]">
          <div className="flex items-center gap-8 flex-col">
            <a>
              <img src={tablet} className="w-12 h-12 cursor-pointer expand" />
            </a>
            <a>
              <img src={phone} className="w-12 h-12 cursor-pointer expand" />
            </a>
            <a>
              <img src={laptop} className="w-12 h-12 cursor-pointer expand" />
            </a>
            <a>
              <img src={xbox} className="w-12 h-12 cursor-pointer expand" />
            </a>
            <a>
              <img src={airpods} className="w-12 h-12 cursor-pointer expand" />
            </a>
            <a>
              <img src={pc} className="w-12 h-12 cursor-pointer expand" />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-grow">
          <div className="text-center py-5">
            <p className="text-5xl font-light">Welcome!</p>
            <div className="flex-container gap-5 py-3">
              <div className="card bg-[#e2d2d2]">
                <p className="text-xl font-medium">iPhone 13 Pro Max</p>
                <div className="flex justify-center"><img className="h-32 w-32" src={pc} alt="Image" /></div>
                <p>Card 1</p>
              </div>
              <div className="card">
                <p>Card 2</p>
                <div className="flex justify-center"><img className="h-32 w-32" src={pc} alt="Image" /></div>
              </div>
              <div className="card">
                <p>Card 3</p>
                <div className="flex justify-center"><img className="h-32 w-32" src={pc} alt="Image" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LeftContainer;