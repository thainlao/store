import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    if (storedOrderDetails) {
      setOrderDetails(storedOrderDetails);
    }
  }, []);

  useEffect(() => {
    if (orderDetails) {
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails))
    }
  }, [orderDetails])

    return (
      <div className="flex justify-center items-center gap-5 text-black dashdiv flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="lg:text-3xl font-semibold text-[#41403f]">История заказов</p>
        <div className="flex gap-5">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="lg:w-36 md:w-32 md:h-12 lg:h-12 w-24 h-9 rounded-md hover:bg-[#cc8d8d] items-center bg-[#e29c9c] text-white"
          >
            Аккаунт
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="lg:w-36 md:w-32 md:h-12 lg:h-12 w-24 h-9 rounded-md hover:bg-[#b4a9a9] items-center bg-[#c9bdbd] text-white"
          >
            На главную
          </button>
        </div>
      </div>
      <div className="dashboardcontainer text-sm lg:text-xl md:text-xl lg:py-10 md:py-10 gap-5 flex justify-start flex-col">
        {orderDetails ? (
          <div className="flex justify-center items-center flex-col font-medium">
            <p>Сумма: {orderDetails.price.toLocaleString()}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Товары:</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index}>
                  {item.name} - Количество: {item.quantity} - Цена: {item.amount}
                </li>
              ))}
            </ul>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Упоковать в подарок? {orderDetails.packagingChecked.toString()}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Способ получения: {orderDetails.deliveryOption}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Выбор оплаты: {orderDetails.paymentOption}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Имя: {orderDetails.name}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Телефон: {orderDetails.phone}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Email: {orderDetails.email}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
            <p>Адрес: {orderDetails.address}</p>
            <hr  className='bg-black p-[0.5px] w-full'/>
          </div>
        ) : (
          <p className="flex items-center justify-center">Пока вы не сделали ни одного заказа :(</p>
        )}
      </div>
    </div>
      );
    };

export default Orders;
