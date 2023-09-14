import React, { useState, useEffect } from "react";
import { IProduct } from "../../types/types";
import './store-styles/tshirt.css';
import { useAppDispatch, useAppSelector } from "../../hoocs/hoocs";
import { Link } from "react-router-dom";
import { addItemToFavorites, removeItemFromFavorites } from "../../redux/reducers/Favorites";
import Notification from "./Notification";


interface itemProps {
    item: IProduct;
}
const ClothItem: React.FC<itemProps> = ({item}) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.favoriteReducer);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string>("");

    useEffect(() => {
        const existFavorite = state.favorites.find(favItem => favItem.id === item.id);
        if (existFavorite) {
            setIsFavorite(true);
        }
    }, [state.favorites, item.id]);

    useEffect(() => {
        if (notificationMessage) {
            const timer = setTimeout(() => {
                setNotificationMessage('')
            }, 2000);

            return () => clearTimeout(timer)
        }
    }, [notificationMessage])


    const handleAddToFavorites = () => {
        if (isFavorite) {
            dispatch(removeItemFromFavorites(item.id));
            setIsFavorite(false);
            setNotificationMessage(`${item.name} удален из избранного`);
        } else {
            dispatch(addItemToFavorites(item));
            setIsFavorite(true);
            setNotificationMessage(` ${item.name} добавлен в избранное`);
        }
    }

    return (
        <div> 
            <Link to={`/store/product/${item.id}`} className="cloth-item">
                <img className="cloth-item-img" src={item.image} alt={item.name} />
                <p className="cloth-item-text">{item.name}</p>
                <p className="cloth-item-price">{item.price.toLocaleString()} ₽</p>
            </Link>
            <img 
                src={isFavorite ? '../../../public/heart.png' : '../../../public/hear1.png'} 
                className={`favorite ${isFavorite ? `favorite1` : 'favorite2'}`}
                onClick={handleAddToFavorites} 
            />
            {notificationMessage && <Notification message={notificationMessage} />}
        </div>
    )
}

export default ClothItem