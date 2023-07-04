import React from "react";
import { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import '../styles/input.css';

function Search(){
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Macbook air M2",
            price: 49999,
            route: "/laptops",
          },
          {
            id: 2,
            name: "Macbook air M1",
            price: 29999,
            route: "/laptops",
          },
          {
            id: 3,
            name: "Macbook air M3",
            price: 45999,
            route: "/laptops",
          },
          {
            id: 4,
            name: "Hyper X Cloud Alpha",
            price: 13000,
            route: "/headset",
          },
          {
            id: 5,
            name: "Hyper X Cloud",
            price: 8500,
            route: "/headset",
          },
          {
            id: 6,
            name: "Hyper X Cloud Alpha",
            price: 10999,
            route: "/headset",
          },
          {
            id: 7,
            name: "iPad Pro",
            price: 54000,
            route: "/laptops",
          },
          {
            id: 8,
            name: "iPad Pro Mini",
            price: 53500,
            route: "/laptops",
          },
          {
            id: 9,
            name: "iPad Pro 13",
            price: 84500,
            route: "/laptops",
          },
          {
            id: 10,
            name: "Asus Rog",
            price: 185000,
            route: "/pcs",
          },
          {
            id: 11,
            name: "Asus Rog 14",
            price: 120000,
            route: "/pcs",
          },
          {
            id: 12,
            name: "Shitty pc",
            price: 100,
            route: "/pcs",
          },
          {
            id: 13,
            name: "iPhone 15",
            price: 85000,
            route: "/phones",
          },
          {
            id: 14,
            name: "iPhone 13",
            price: 64000,
            route: "/phones",
          },
          {
            id: 15,
            name: "iPhone 13 Pro Max",
            price: 110000,
            route: "/phones",
          },
    ]

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        filterProducts(event.target.value);
      };
    
      const filterProducts = (query) => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 3);
        setFilteredProducts(filtered);
      };

      const handleProductClick = (route) => {
        navigate(route);
      }; 

    return (
    <div className="items-center py-5">
<p className="py-5 text-3xl font-semibold text-[white] ml-6 flex justify-start">Найдите товар</p>
        <div className="search-container">
        <input
          type="text"
          placeholder="Поиск товаров"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        {filteredProducts.length > 0 ? (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card cursor-pointer"
                onClick={() => handleProductClick(product.route)}
              >
                <div className="product-name">{product.name}</div>
                <p className="product-price">Цена: {product.price} ₽</p>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
    )
}

export default Search;