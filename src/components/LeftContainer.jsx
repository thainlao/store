import React from "react";
import laptop from '../assets/ноутбук.png';
import tablet from '../assets/планшет.png';
import phone from '../assets/телефон.png';
import xbox from '../assets/консоли.png';
import airpods from '../assets/наушники.png';
import pc from '../assets/компьютер.png';
import iphone from '../assets/iphone1.png';
import macbook from '../assets/macbook1.png';
import xbox1 from '../assets/xbox1.png';
import watch from '../assets/applewatch.png';
import planshet from '../assets/planshet.png';
import airpods1 from '../assets/airpods1.png';

function LeftContainer() {
    return (
        <div className="flex">
        <div style={{ width: '5%', height: '1200px' }} className="bg-[#cdd4db]">
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
            <div className="flex-container gap-5 py-3">
              <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">iPhone 13 Pro Max</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={iphone} alt="Image" /></div>
                <p className="text-xl font-medium">69 000 ₽</p>
              </div>
              <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">Macbook Pro 13 (M2)</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={macbook} alt="Image" /></div>
                <p className="text-xl font-medium">120 000 ₽</p>
              </div>
              <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">XBOX ONE (X)</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={xbox1} alt="Image" /></div>
                <p className="text-xl font-medium">48 500 ₽</p>
              </div>
            </div>
            <div className="py-10 flex-container gap-5 ">
            <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">Apple Watch</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={watch} alt="Image" /></div>
                <p className="text-xl font-medium">24 000 ₽</p>
              </div>
              <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">iPad PRO M1</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={planshet} alt="Image" /></div>
                <p className="text-xl font-medium">54 000 ₽</p>
              </div>
              <div className="card bg-[#e2d2d2] cursor-pointer cardsbg">
                <p className="text-xl font-medium">Air pods Pro</p>
                <div className="flex justify-center"><img className="h-40 w-40" src={airpods1} alt="Image" /></div>
                <p className="text-xl font-medium">21 000 ₽</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default LeftContainer;