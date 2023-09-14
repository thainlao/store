import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hoocs/hoocs';
import { removeItemFromFavorites } from '../../redux/reducers/Favorites';
import { IProduct } from '../../types/types';
import StoreHeader from './StoreHeader';
import './store-styles/favorites.css';

const Favorites = () => {
    const favorites = useAppSelector(state => state.favoriteReducer.favorites);
    const dispatch = useAppDispatch();

    const handleRemove = (item: IProduct) => {
        dispatch(removeItemFromFavorites(item.id))
    }


    if (favorites.length === 0) {
        return (
            <div className="cartItem">
                <StoreHeader />
                <div className="cartline">
                <p className="buy_title">Избранное</p>
                    <div className="line"></div>
                </div>
                <div className="buy">Вы ничего не добавляли избранное.</div>
                <div className='buy'>Перейти в <Link to='/store/'>Магазин</Link></div>
            </div>
        )
    }

    return (
        <div className="cartItem">
            <StoreHeader />

                <div className="cartline">
                    <h2 className="buy_title">Избранное</h2>
                    <div className="line"></div>
                </div>

                <div className="cartContainer">
                    <div className="cartItem_dis">
                        {favorites.map((item: IProduct) => (
                        <div key={item.id} className="cartItem_container">
                            <div className="left_section">
                                <Link to={`/store/product/${item.id}`}><img className="cartItem_img" src={item.image} alt={item.name}/></Link>
                                <div className="item_selector">
                                    <p className="buy_title_img">{item.name}</p>
                                    <div className='fav_cus'>
                                        <Link to={`/store/product/${item.id}`} className='add_to'>Подробнее</Link>
                                    </div>
                                </div>
                                <button className="remove_but" onClick={() => handleRemove(item)}>×</button>
                            </div>
                        </div>
                    ))}
                    </div>

                    
                    <div className="buy_section">
                        <h2 className='sub_text'>Мы очень рады, что вы пользуетесь нашим магазином.</h2>
                        <div className="line">
                        <h2 style={{marginTop: '25px'}} className='sub_text'>Мы стараемся как можно чаще радовать наших пользователей скидкой и новыми товарами.</h2>
                    </div>

                    </div>
                </div>
        </div>
    )
}

export default Favorites;