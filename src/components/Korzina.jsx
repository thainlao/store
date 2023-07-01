import React, { useState, useEffect } from "react";
import sad from '../assets/sad.png';
import { Navigate, useNavigate } from "react-router-dom";
import phonepng from '../2assets/phone.png';
import emailpng from '../2assets/email.png';
import addresspng from '../2assets/address.png';
import namepng from '../2assets/name.png';
import Orders from "./Orders";

const Korzina = ({ items, onRemoveItemClick, setkorzcount, setPrice, setItems  }) => {
  const [isPackagingChecked, setPackagingChecked] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [paymentOption, setPaymentOption] = useState("");
  const [formattedPrice, setFormattedPrice] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isOrderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePackagingChange = () => {
    setPackagingChecked(!isPackagingChecked);
  };

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setFormattedPrice(0);
    setOrderPlaced(false);
    navigate("/orders");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const formattedTotalQuantity = totalQuantity.toLocaleString();

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  useEffect(() => {
    if (window.location.pathname === "/korzina") {
      setFormattedPrice(0);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const orderDetails = {
      price: totalAmount,
      items: items,
      packagingChecked: isPackagingChecked,
      deliveryOption: deliveryOption,
      paymentOption: paymentOption,
      name: name,
      phone: phone,
      email: email,
      address: address,
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    setkorzcount(0);
    setPrice(0);
    setItems([]);
    setOrderPlaced(true);
  };

  return (
    <div style={{ height: 'auto'}} className="flex flex-col justify-center items-center py-20 bg-[#f1e4f3]">
      <div className="text-black font-semibold mb-6 text-xl">В корзине товаров: {formattedTotalQuantity}</div>

      {items.length === 0 ? (
        <div className="flex items-center justify-center flex-col gap-4">
          <img src={sad} alt="sad" className="w-40 h-40" />
          <p className="text-xl text-center">Ваша корзина пуста</p>
          <button
            className="py-2 px-6 bg-primary text-black bg-[white]
            hover:bg-[#f7f5f5] shadow-lg text-lg rounded-lg"
            onClick={() => navigate("/")}
          >
            Вернуться к покупкам
          </button>
        </div>
      ) : (
        <div className="w-10/12">
          {items.map((item) => (
            <div key={item.id} className="bg-white py-4 px-6 mb-4 shadow-lg">
              <div className="flex justify-between items-center">
                <p>{item.name}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-red-500 text-white p-1 rounded"
                    onClick={() => onRemoveItemClick(item.id)}
                  >
                    X
                  </button>
                  <span className="text-xl">{item.quantity} шт.</span>
                </div>
              </div>
              <p className="text-gray-500">{item.amount} ₽</p>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Итого:</p>
            <p className="text-2xl font-bold">{totalAmount.toLocaleString()} ₽</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="py-2 px-6 bg-[white] mb-4 shadow-lg hover:bg-[#faf6f6]
               text-black w-36 h-16 text-lg rounded-lg"
              onClick={handleModalOpen}
            >
              Оформить
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 lg:w-96 md:w-80 w-64">
            {!isOrderPlaced ? (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="flex items-center gap-2">
                    <img src={namepng} alt="name" className="w-6 h-6"/>
                    <span>Имя:</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="border-gray-300 border-2 p-2 rounded w-full lg:h-12 md:h-9 h-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="flex items-center gap-2">
                    <img src={phonepng} alt="phone" className="w-6 h-6"/>
                    <span>Телефон:</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    className="border-gray-300 border-2 p-2 rounded w-full lg:h-12 md:h-9 h-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center gap-2">
                    <img src={emailpng} alt="email" className="w-6 h-6"/>
                    <span>Email:</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="border-gray-300 border-2 p-2 rounded w-full lg:h-12 md:h-9 h-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="flex items-center gap-2">
                    <img src={addresspng} alt="address" className="w-6 h-6" />
                    <span>Адрес:</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={handleAddressChange}
                    required
                    className="border-gray-300 border-2 p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="packaging" className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="packaging"
                      name="packaging"
                      checked={isPackagingChecked}
                      onChange={handlePackagingChange}
                      className="mr-2"
                    />
                    <span>Упаковка подарка</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="delivery" className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="delivery"
                      name="deliveryOption"
                      value="delivery"
                      checked={deliveryOption === "delivery"}
                      onChange={handleDeliveryOptionChange}
                      className="mr-2"
                    />
                    <span>Доставка</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="pickup" className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="pickup"
                      name="deliveryOption"
                      value="pickup"
                      checked={deliveryOption === "pickup"}
                      onChange={handleDeliveryOptionChange}
                      className="mr-2"
                    />
                    <span>Самовывоз</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="payment" className="flex items-center gap-2">
                    <span>Способ оплаты:</span>
                  </label>
                  <select
                    id="payment"
                    name="paymentOption"
                    value={paymentOption}
                    onChange={handlePaymentOptionChange}
                    className="border-gray-300 border-2 p-2 rounded w-full"
                  >
                    <option value="">Выберите способ оплаты</option>
                    <option value="cash">Наличные</option>
                    <option value="card">Карта</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-2 px-6 bg-primary text-black bg-[#ced1ce] text-lg rounded-lg"
                  >
                    Подтвердить заказ
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-xl mb-4">Заказ успешно размещен!</p>
                <button
                  className="py-2 px-6 bg-primary text-black bg-[white] text-lg rounded-lg shadow-lg border border-black"
                  onClick={handleModalClose}
                >
                  Закрыть
                </button>
                
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzina;
