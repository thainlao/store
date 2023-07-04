import React, { useState, useEffect } from 'react';
import LeftContainer from './components/LeftContainer';
import Header from './components/Header';
import Headset from './Links/Headset';
import Laptops from './Links/Laptops';
import Phones from './Links/Phones';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Pcs from './Links/Pcs';
import Consoles from './Links/Consoles';
import Ipads from './Links/Ipads';
import Mainbody from './Mainbody/Mainbody';
import Login from './components/Login';
import Korzina from './components/Korzina';
import Dashboard from './components/Dashboard';
import Redux from './store/Redux';
import Orders from './components/Orders';
import Arts from './Mainbody/Arts';

import photo1 from './assets/airpods1.png';
import photo2 from './assets/applewatch.png';
import photo3 from './assets/macbook1.png';
import photo4 from './assets/xbox1.png';

function App() {
  const [showMainbody, setShowMainbody] = useState(true);
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [korzCount, setkorzcount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleBuyClick = (newPrice, item) => {
    setPrice((prevPrice) => prevPrice + newPrice);
    setItems((prevItems) => [...prevItems, { ...item, newPrice, quantity: 1 }]);
    setkorzcount(korzCount + 1);
  };

  const handleRemoveItemClick = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const removedItem = updatedItems.splice(index, 1)[0];
      setkorzcount(korzCount - 1);
      setPrice((prevPrice) => prevPrice - removedItem.newPrice);
      return updatedItems;
    });
  };

  return (
    <Router>
      {!isModalOpen && <Header price={price} korzCount={korzCount} isLoggedIn={isLoggedIn} />}
      <LeftContainer />
      <Routes>
        {showMainbody && (
          <Route path="/" element={<Mainbody setShowMainbody={setShowMainbody} />} />
        )}
        <Route path="/headset" element={<Headset onBuyClick={handleBuyClick} />} />
        <Route path="/laptops" element={<Laptops onBuyClick={handleBuyClick} />} />
        <Route path="/pcs" element={<Pcs onBuyClick={handleBuyClick} />} />
        <Route path="/phones" element={<Phones onBuyClick={handleBuyClick} />} />
        <Route path="/consoles" element={<Consoles onBuyClick={handleBuyClick} />} />
        <Route path="/ipads" element={<Ipads onBuyClick={handleBuyClick} />} />
        <Route path='/mainbody' element={<Mainbody />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path='/korzina'
          element={
            <Korzina
              items={items}
              onRemoveItemClick={handleRemoveItemClick}
              setkorzcount={setkorzcount}
              setPrice={setPrice}
              setItems={setItems}
              setIsModalOpen={setIsModalOpen}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
