import './styles/mainbody.css';
import './styles/screen3.css';
import { Link } from "react-router-dom";

const Screen3 = () => {
    return (
        <div className="screen3">
            <div className='dark-bg'></div>
            <Link to='/store' className='screen3_main_text'>магазин</Link>
        </div>
    )
}

export default Screen3