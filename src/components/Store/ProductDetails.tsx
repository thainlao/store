import React, { useState } from 'react';
import data from '../../products/products.json';
import { Link, useParams } from 'react-router-dom';
import './store-styles/itemdetailted.css';
import StoreHeader from './StoreHeader';
import { useAppDispatch } from '../../hoocs/hoocs';
import { addItemToCard } from '../../redux/reducers/CorzState';
import Notification from './Notification';

const ProductDetail: React.FC = () => {

    const [notificationMessage, setNotificationMessage] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string | null | string[]>(null);

    const { productId } = useParams();
    const selectedItemId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const selectedItem = data.data.find((item) => item.id === selectedItemId) 
    if (!selectedItem) {
        return <p>Something went wrong, try again!</p>
    }

    const dispatch = useAppDispatch();

    const handleSizeChange = (size: string | string[]) => {
        setSelectedSize(size);
    }

    const handeAddToCart = () => {
        if(selectedSize || selectedItem.size.length === 1) {
            dispatch(addItemToCard({ ...selectedItem, size: selectedSize}))

            setNotificationMessage(`${selectedItem.name} добавлен в корзину`);
        } else {
            setNotificationMessage("Пожалуйста, выберите размер перед добавлением в корзину")
        }
    }
    
    return (
        <div className='itemdetailted'>
            <StoreHeader />

            <img className='itemdetailted_img' src={selectedItem.image} alt={selectedItem.name}/>

            <div className='navigation'>
                <Link className='nav' to='/'>Домой /</Link>
                <Link className='nav' to='/store'> Магазин /</Link>
                <Link className='nav' to=''> {selectedItem.name}</Link>
            </div>

            <div className='product_section'>
                <div className='itemdetailted_text'>
                    <h2 className='text_pro'>{selectedItem.name}</h2>
                    <p className='text_pro'>{selectedItem.price.toLocaleString()} ₽</p>
                </div>

                <div className='itemdetailted_size'>
                {selectedItem.size.length > 1 && (
                    <div className="size-circles">
                        {selectedItem.size.map((sizeOption) => (
                            <div
                                key={sizeOption}
                                className={`size-circle ${selectedSize === sizeOption ? 'selected' : ''}`}
                                onClick={() => handleSizeChange(sizeOption)}
                            >
                                {sizeOption}
                            </div>
                        ))}
                    </div>
                )}
                </div>

                <div className='button_section'>
                    <Link to='/store' className='buttondetail'>Магазин</Link>
                    <button onClick={handeAddToCart} className='buttondetail_b'>Купить</button>
                </div>
            </div>

            {notificationMessage && <Notification message={notificationMessage} />}
        </div>
    )
}

export default ProductDetail