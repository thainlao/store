import React, { useState, useEffect } from "react";
import sad from '../assets/sad.png';
import { Navigate, useNavigate } from "react-router-dom";
import phonepng from '../2assets/phone.png';
import emailpng from '../2assets/email.png';
import addresspng from '../2assets/address.png';
import namepng from '../2assets/name.png';

const Korzina = ({ items, onRemoveItemClick, setkorzcount, setPrice, setItems  }) => {
  const [isPackagingChecked, setPackagingChecked] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [paymentOption, setPaymentOption] = useState("");
  const [formattedPrice, setFormattedPrice] = useState("0");
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
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
    setFormattedPrice("0");
    navigate("/korzina");
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
  const formattedTotalAmount = totalAmount.toLocaleString();

  useEffect(() => {
    if (window.location.pathname === "/korzina") {
      setFormattedPrice("0");
    }
  }, []);

  const handleFormSubmit = (event) => {
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Address:", address);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setModalOpen(false)

    navigate("/");
    setkorzcount(0)
    setPrice(0)
    setItems([])
  };

  return (
    <div style={{ height: 'auto'}} className="flex flex-col justify-center items-center py-20 bg-[#f1e4f3]">
      <div className="text-black font-semibold mb-6 text-xl">В корзине товаров: {formattedTotalQuantity}</div>

      {items.length === 0 ? (
        <div className="flex items-center justify-center flex-col gap-5">
          <p className="text-black font-light text-3xl">Кажется ваша корзина пуста...</p>
          <img src={sad} className="w-16 h-16" alt="sadly" />
        </div>
      ) : (
        <div className="max-w-md w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Название</th>
                <th className="text-center py-2">Количество</th>
                <th className="text-right py-2">Стоимость</th>
                <th className="text-right py-2"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {items.map((item, index) => (
                <tr 
                className="border border-black border-opacity-50"
                key={index}>
                  <td className="py-2">{item.name}</td>
                  <td className="text-center py-2">{item.quantity}</td>
                  <td className="text-right py-2">{item.amount.toLocaleString()} ₽</td>
                  <td className="text-right py-2">
                    <button
                      className="text-black hover:bg-[black] hover:text-[white] transition delay-80 rounded-full bg-white h-12 w-20 shadow-black shadow-sm ml-4 text-md"
                      onClick={() => onRemoveItemClick(index)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {items.length > 0 && (
        <div>
          <div className="text-black font-semibold py-6 text-xl">Оформление заказа</div>
          <div className="flex items-center mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isPackagingChecked}
                onChange={handlePackagingChange}
                className="mr-2"
              />
              Добавить упаковку?
            </label>
          </div>
          <div className="flex items-center mt-6">
            <span>Способ доставки:</span>
            <select
              value={deliveryOption}
              onChange={handleDeliveryOptionChange}
              className="ml-2 p-2 border border-gray-300 rounded"
            >
              <option value="">Выберите способ доставки</option>
              <option value="pickup">Самовывоз</option>
              <option value="delivery">Доставка по Москве</option>
            </select>
          </div>
          <div className="flex items-center mt-6">
            <span>Форма оплаты:</span>
            <select
              value={paymentOption}
              onChange={handlePaymentOptionChange}
              className="ml-2 p-2 border border-gray-300 rounded"
            >
              <option value="">Выберите форму оплаты</option>
              <option value="cash">Наличные</option>
              <option value="card">Оплата картой при получении</option>
            </select>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div className="text-black font-semibold py-6 text-xl">Сумма к оплате: {formattedTotalAmount} ₽
          <div className="py-6 flex flex-col">
            <button
              className="text-black hover:bg-[black] hover:text-[white] transition delay-80
                       rounded-full bg-white h-12 w-32 text-sm font-semibold shadow-black shadow-sm ml-4 text-md"
              onClick={handleModalOpen}
            >
              Оформление
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Оформление заказа</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4 flex items-center">
                <label htmlFor="name"><img src={namepng} className="w-6 h-6"/></label>
                <input
                  placeholder="Ваше имя"
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="name"><img src={phonepng} className="w-6 h-6"/></label>
                <input
                  placeholder="Ваш телефон"
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="name"><img src={emailpng} className="w-6 h-6"/></label>
                <input
                  placeholder="Ваша почта"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="name"><img src={addresspng} className="w-6 h-6"/></label>
                <input
                  placeholder="Ваш адресс"
                  type="text"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  className="border border-gray-300 rounded px-2 py-1 ml-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-black hover:bg-[black] hover:text-[white] transition delay-80
                             rounded-full bg-white h-12 w-20 text-sm font-semibold shadow-black shadow-sm ml-2"
                  onClick={handleModalClose}
                >
                  Закрыть
                </button>
                <button
                  type="submit"
                  className="text-black hover:bg-[black] hover:text-[white] transition delay-80
                             rounded-full bg-white h-12 w-32 text-sm font-semibold shadow-black shadow-sm ml-2"
                >
                  Подтвердить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzina;
