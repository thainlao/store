import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './store-styles/store.css';
import { useAppSelector } from '../../hoocs/hoocs';


const StoreHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const cartItems = useAppSelector(state => state.cartReducer);
    const favoriteItem = useAppSelector(state => state.favoriteReducer.favorites)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return ( 
        <div>
            <header className={`store_header ${scrolled ? 'scrolled' : ''}`}>
                <Link to='/' className="store_header_text">THAINLAO</Link>

                <Link to='/store/' className="header_location">
                    <h3 className="store_header_moscow">Moscow / <img className='russia' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////CNykGG3kAAGwAGH7LOR9TMMkKAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII='/></h3>
                </Link>

                <Link to='/store/favorites' className='store_header_count'>
                    <img className='star' src={`${scrolled ? '../../../public/star.png' : '../../../public/star1.png'}`} />
                    {favoriteItem.length > 0 && <div className='counter'>{favoriteItem.length}</div>}
                </Link>

                <Link to='/store/cart' className="store_header_count">
                    <img className="corzina" src={`${scrolled ? '../../../public/corz1.png' : '../../../public/corz.png'}`} />
                    {cartItems.length > 0 && <div className="counter">{cartItems.length}</div>}
                </Link>
            </header>
        </div>
    );
};

export default StoreHeader;