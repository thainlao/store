import React, { useState } from "react";
import './store-styles/tshirt.css';
import data from '../../products/products.json';
import ClothItem from "./ClothItem";
import { IProduct } from "../../types/types";


interface FilteredDataItem extends IProduct {
    type: string;
}

const Tshirt = () => {
    const [genderFilter, setGenderFilter] = useState<string>('any');
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [clothFilter, setClothFilter] = useState<string>('any');

    const handleClothChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setClothFilter(event.target.value);
    }
    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGenderFilter(event.target.value);
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(event.target.value);
    }

    const filtetedData: FilteredDataItem[] = data.data.filter((item: IProduct) => {
        const genderMatch = 
        (genderFilter === 'Унисекс' && item.gender.includes('male') && item.gender.includes('female') || genderFilter === 'any' || item.gender.includes(genderFilter))
        const clothMatch = clothFilter === 'any' || (item.cloth && item.cloth.includes(clothFilter))
        const searchMatch = item.name.toLowerCase().includes(searchFilter.toLowerCase());
        
        return genderMatch && searchMatch && clothMatch;
    })

    const itemPerPage = 10;
    const [endIndex, setEndIndex] = useState<number>(itemPerPage);
    const paginationData = filtetedData.slice(0, endIndex);

    const loadMore = () => {
        const newEndIndex = endIndex + itemPerPage;
        if (newEndIndex <= filtetedData.length) {
            setEndIndex(newEndIndex);
        }
    };

    const renderLoadMoreButton = () => {
        if (paginationData.length >= 40 || paginationData.length >= filtetedData.length) {
            return null;
        }
        
        if (paginationData.length < 10) {
            return null;
        }
    
        return (
            <button className="load-more-button" onClick={loadMore}>
                Загрузить еще
            </button>
        );
    };

    return (
        <div className="clothes">
            <div className="clothes-container">
                <p className="clothes-title">THAINLAO STORE</p>

                <div className="search-container">

                    <select value={genderFilter} className="select" onChange={handleGenderChange}>
                        <option value="">Выберите пол</option> 
                        <option value="Унисекс">Унисекс</option> 
                        <option value="female">Женский</option> 
                        <option value="male">Мужской</option> 
                    </select>

                    <select value={clothFilter} className="select" onChange={handleClothChange}>
                        <option value="">Выберите тип одежды</option> 
                        <option value='Платье'>Платье</option> 
                        <option value='Пиджак'>Пиджаки</option> 
                        <option value='Футболка'>Футболки</option> 
                        <option value='Куртка'>Куртки</option> 
                        <option value='Сумка'>Сумки</option> 
                        <option value='Обувь'>Обувь</option>  
                    </select>

                    <input className="search-input" placeholder="Поиск" value={searchFilter} onChange={handleSearchChange} />
                </div>

                <div className="tshirts">
                    {paginationData.length === 0 ? (
                        <div className="noth">
                            <p className="noth_text">Ничего не найдено</p>
                        </div>
                    ) : (
                        paginationData.map((item) => (
                            <div key={item.id}>
                                <div className="onetshirt">
                                    <ClothItem item={item} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="loadmore">
                        {renderLoadMoreButton()}
                </div>
            </div>
        </div>
    )
}

export default Tshirt;