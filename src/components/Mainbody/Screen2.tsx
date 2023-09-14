import './styles/mainbody.css';
import './styles/screen2.css';
import { Link } from "react-router-dom";

const Screen2 = () => {
    return (
        <div className="screen2">
            <div className="screen2_container">
                <div className="screen2_text">
                    <Link to='/store' className="scool_text">(sh)cool time!</Link>
                    <div className="school_b">
                        <Link to='/store' className="scool_text">посмотреть коллекцию</Link>
                        <div className="school_button">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>

                <div className="screen2_img">
                    <img className="school_img" src="https://nuw.store/upload/iblock/f51/qnxg80i5asjwtyv5f7dlt6wp5p1x0yt5.jpg"/>
                    <img className="school_img" src="https://nuw.store/upload/iblock/8b6/2yjd23mrb8ku4tylmyy91sgrc1z14m6w.jpg"/>
                </div>

                <div className="line_with_">
                    <div className="line_with_container">
                        <p className="line_with_text">DIESEL</p>
                        <p className="line_with_text">RICK OWENS</p>
                        <p className="line_with_text">DSQUARED</p>
                        <p className="line_with_text">SAINT LAURENT</p>
                        <p className="line_with_text">BRIONI</p>
                        <p className="line_with_text">MAGDA BUTRYM</p>
                        <p className="line_with_text">GUCCI</p>
                        <p className="line_with_text">BOSS</p>
                        <p className="line_with_text">MONCLER</p>
                        <p className="line_with_text">BALMAIN PARIS</p>
                        <p className="line_with_text">PRADA</p>
                        <p className="line_with_text">ZENITH</p>
                    </div>
                </div>

                <div className='screen2_tipe'>
                    <p className='tipe-main'>собери свой образ ECRU</p>
                    <p className='tipe-grey'>делись им с хештегами #ecrustyle, #ecrugang и отмечай @ecrubrand в социальных сетях</p>
                </div>

            </div>
        </div>
    )
}

export default Screen2