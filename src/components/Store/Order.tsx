import React, {useState, useEffect} from "react";
import './store-styles/order.css';
import { OrderModalProps } from "../../types/types";
import { useAppDispatch } from "../../hoocs/hoocs";
import { clearCart } from "../../redux/reducers/CorzState";
import { useNavigate } from "react-router-dom";



const OrderModal: React.FC<OrderModalProps> = ({ onClose, discountedPrice, originalPrice }) => {
  const [finalSum, setFinalSum] = useState<number>(0);
  const [isOrderEnabled, setIsOrderEnabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);

  const validateName = () => {
    if (name.length >= 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };
  
  const validateEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };
  
  const validatePhone = () => {
    if (/^\d+$/.test(phone)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };
  
  const validateAddress = () => {
    if (address.length >= 10) {
      setIsAddressValid(true);
    } else {
      setIsAddressValid(false);
    }
  };

  useEffect(() => {
    if (discountedPrice) {
      setFinalSum(discountedPrice)
    } else {
      setFinalSum(originalPrice)
    }
  }, [])

  useEffect(() => {
    if (isNameValid && isEmailValid && isPhoneValid && isAddressValid) {
      setIsOrderEnabled(true);
    } else {
      setIsOrderEnabled(false);
    }
  }, [isNameValid, isEmailValid, isPhoneValid, isAddressValid]);

  const handleOrderButtonClick = () => {
    if (isOrderEnabled) {
      dispatch(clearCart());
      onClose();
      navigate('/orderplaced');
    } else {
      alert('Заполните все поля верно');
    }
  };

    return (
      <div className='order-modal'>
        <div className="modal-content">
          <h2 className="buy_title" style={{display: 'flex', justifyContent: 'center', padding: '6px'}}>Заказ</h2>
          <div className="line"></div>

          <div className="modal_input_container">
            <p className="buy_title">Общая сумма заказа:</p>
            <h2 className="buy_summ">{finalSum.toLocaleString()} ₽</h2>
          </div>

          <button className="remove_but" onClick={onClose}>x</button>
          <div className="line"></div>
          <p className="buy_title">Ваши данные</p>

          <div className="modal_info">
              <p style={{fontSize: '20px', marginBottom: '5px', marginTop: '5px'}} className="buy_title">Ваше имя</p>
              <input
                className={`modal_input ${!isNameValid ? 'modal_input_invalid' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
              />
              {!isNameValid && <div className="error-message">Введите имя</div>}
          </div>

          <div className="line"></div>

          <div className="modal_info">
              <p style={{fontSize: '20px', marginBottom: '5px', marginTop: '5px'}} className="buy_title">Почта</p>
              <input
                className={`modal_input ${!isEmailValid ? 'modal_input_invalid' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {!isEmailValid && <div className="error-message">Введите корректный email</div>}
          </div>

          <div className="line"></div>

          <div className="modal_info">
              <p style={{fontSize: '20px', marginBottom: '5px', marginTop: '5px'}} className="buy_title">Телефон</p>
              <input
                className={`modal_input ${!isPhoneValid ? 'modal_input_invalid' : ''}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={validatePhone}
              />
              {!isPhoneValid && <div className="error-message">Введите корректный номер телефона</div>}
          </div>

          <div className="line"></div>

          <p className="buy_title">Данные доставки</p>

          <div className="modal_info">
              <p style={{fontSize: '20px', marginBottom: '5px', marginTop: '5px'}} className="buy_title">Адресс</p>
              <input
                className={`modal_input ${!isAddressValid ? 'modal_input_invalid' : ''}`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onBlur={validateAddress}
              />
               {!isAddressValid && <div className="error-message">Введите адрес</div>}
          </div>

          <div className="line"></div>

          <div className="modal_info">
          <p className="buy_title" style={{fontSize: '20px', marginBottom: '5px', marginTop: '5px'}}>Вариант оплаты</p>
          <div className="payment-options">
            <label>
              <input type="radio" checked name="payment" value="Наличными" />
              Наличными
            </label>
            <label>
              <input type="radio" name="payment" value="Картой" />
              Картой
            </label>
          </div>
        </div>

          <div className="line"></div>

          <button
            onClick={handleOrderButtonClick}
            className={isOrderEnabled ? 'order_button' : 'order_button_d'}
            disabled={!isOrderEnabled}
          >
            Сделать заказ
          </button>

          <button
            onClick={onClose}
            className='order_button'
          >
            Закрыть
          </button>

        </div>
      </div>
    )
}

export default OrderModal;