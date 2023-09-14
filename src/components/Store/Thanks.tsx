import {useState} from 'react';
import './store-styles/thanks.css'
import { Link } from 'react-router-dom';

const Thanks = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleStarClick = (selectedRating: number) => {
        setRating(selectedRating);
    };

    return (
        <div className='thanks'>
            <div className='thanks_container'>
                <h2 className='thanks_maintext'>THAINLAO STORE</h2>

                <div className='thanks_subtext_container'>
                    <h2 className='thanks_subtext'>
                        Благодарим вас за заказ
                    </h2>

                    <h2 className='thanks_subtext'>
                        Мы скоро с вами свяжемся!
                    </h2>

                    <h2 className='thanks_subtext'>Оцените мой сайт, по шкале от 1 до 5.</h2>

                    <div className='thanks_rating'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${hoverRating !== null && star <= hoverRating ? 'hovered' : ''} ${rating !== null && star <= rating ? 'selected' : ''}`}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(null)}
                                onClick={() => handleStarClick(star)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>

                    {rating !== null && (
                        <div className='thanks_subtext_container'>
                            <h2 className='thanks_subtext'>
                                Спасибо за ваше мнение, вы оценили на {rating}.<br />
                            </h2>

                            <h2 className="thanks_subtext">
                            Это очень важно для меня!
                            </h2>
                        </div>
                    )}

                    <h2 className='thanks_subtext'>
                        Перейти <Link className='link_th' to='/'>Домой</Link> или продолжить <Link className='link_th' to='/store'>Покупки</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Thanks;