import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../hoocs/hoocs";
import './store-styles/cartItem.css';
import StoreHeader from "./StoreHeader";
import { removeItemFromCard } from "../../redux/reducers/CorzState";
import { IProduct, cartItemProps } from "../../types/types";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import OrderModal from "./Order";

const CartItem: React.FC<cartItemProps> = () => {
    const cartItems = useAppSelector(state => state.cartReducer);
    const dispatch = useAppDispatch();

    const handleRemove = (item: IProduct) => {
        dispatch(removeItemFromCard(item.id))
    }

    let [counter, setCounter] = useState<number>(0);
    const [promo, setPromo] = useState<string>('')
    const [price, setPrice] = useState<number>(0);
    const [promoTimes, setPromoTimes] = useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string>("");

    const [originalPrice, setOriginalPrice] = useState<number>(0);
    const [discountedPrice, setDiscountedPrice] = useState<number>(0);

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const openOrderModal = () => {
      setIsOrderModalOpen(true);
    };
  
    const closeOrderModal = () => {
      setIsOrderModalOpen(false);
    };

    const discountRate = 0.15;

    const handlePromo = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPromo(e.target.value)
    }

    useEffect(() => {
        let price = 0;
        counter = 0;

        cartItems.forEach((item) => {
            price += item.price * item.quantity;
            counter += item.quantity
        });

        setOriginalPrice(price);
        setPrice(price);
        setCounter(counter);
    }, [cartItems])

    useEffect(() => {
        if (notificationMessage) {
            const timer = setTimeout(() => {
                setNotificationMessage('')
            }, 2000);

            return () => clearTimeout(timer)
        }
    }, [notificationMessage])

    const handlePromoButton = () => {
        const codes = 'sale'; 

        if (promo === codes) {
            const discountedPrice = price * (1 - discountRate);
            setDiscountedPrice(discountedPrice);
            setPromoTimes(true);
            setPromo('');
            setNotificationMessage(`Вы применили 15% скидку!`);
        } else {
            setPromoTimes(false);
            setNotificationMessage(`Данный промокод не найден`);
        }
    }

    if (cartItems.length === 0) {
        return (
        <div className="cartItem">
            <StoreHeader />
            <div className="cartline">
                <p className="buy_title">Корзина</p>
                <div className="line"></div>
            </div>
            <div className="buy">Вы ничего не добавляли в корзину.</div>
            <div className="buy">
                Перейти в <Link to='/store/'>Магазин</Link>
            </div>
        </div>
        )
    }


    return (
        <div className="cartItem">
            <StoreHeader />

                <div className="cartline">
                    <p className="buy_title">Корзина</p>
                    <div className="line"></div>
                </div>

                <div className="cartContainer">
                    <div className="cartItem_dis">
                        {cartItems.map((item: IProduct) => (
                        <div key={item.id} className="cartItem_container">
                            <div className="left_section">
                                <Link to={`/store/product/${item.id}`}><img className="cartItem_img" src={item.image} alt={item.name}/></Link>
                                <div className="item_selector">
                                    <p className="buy_title_img">{item.name}</p>

                                    {item.size && (
                                        <p className="buy_title_size">Размер: {item.size}</p>
                                    )}
                                </div>
                            </div>

                            <button className="remove_but" onClick={() => handleRemove(item)}>×</button>
                            <div className="cartItem_text">
                                <p className="buy_subtext">Кол-во: {item.quantity}</p>
                                <p className="buy_subtext">Цена за одну: {item.price.toLocaleString()} ₽</p>
                            </div>
                        </div>
                    ))}
                    </div>

                    <div className="buy_section">
                        <p className="buy_title">Оформление заказа</p>

                    <div className="discount">
                        {promoTimes ? (
                            <>
                                <p className="buy_section_text_original-rice">
                                    <del>{originalPrice.toLocaleString()} ₽</del>
                                </p>
                                <p className="buy_section_text_discounted-price">
                                    <ins>{discountedPrice.toLocaleString()} ₽</ins>
                                </p>
                            </>
                        ): (
                            <p className="buy_section_text original-price">
                                {originalPrice.toLocaleString()} ₽
                            </p>
                        )}
                    </div>

                    <button onClick={openOrderModal} className="buy_button">Оформить заказ</button>
                    <p className="buy_title">Промокод</p>
                            <input 
                                disabled={promoTimes === true ? true : false}
                                className={promoTimes === true ? 'confermed_input' : 'promo_input'}
                                placeholder="Введите промокод"
                                value={promo}
                                onChange={handlePromo}
                            />
                        <button 
                        disabled={promoTimes === true ? true : false}
                        onClick={handlePromoButton} 
                        className={promoTimes === true ? 'confermed_button' : 'input_button'}>Применить</button>
                        {promoTimes === true ? <p className="promo_text">Промокод доступен один раз</p> : <div style={{color: 'grey', fontSize: '12px', display: 'flex', flexDirection: 'column', paddingTop: '25px', alignItems: 'start'}}><p>Введите промокод: 'sale'</p><p>Для проверки работы функционала 15% скидки</p></div>}
                    </div>
                </div>
                {notificationMessage && <Notification message={notificationMessage} />}

                {isOrderModalOpen && (
                    <OrderModal onClose={closeOrderModal} originalPrice={originalPrice} discountedPrice={discountedPrice} />
                )}
        </div>
    )
}

export default CartItem;