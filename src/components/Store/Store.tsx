import './store-styles/store.css';
import Tshirt from "./T-shirt";
import StoreHeader from "./StoreHeader";

const Store = () => {

    return (
        <div className="store">

          <div>
            <StoreHeader />
          </div>
            <div className="img_container">
                <div style={{width: '100%', backgroundColor: 'black'}}>
                    <h1 className="container_text">JOIN TO OUR FAMILY.</h1>
                </div>
                <div className="img_container_images">
                    <img className="img_cont" src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1314633897-643dfdc368be1.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
                    <img className="img_cont" src="https://hips.hearstapps.com/hmg-prod/images/hbz-kendall-jenner-0910-getty-1568385389.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
                    <img className="img_cont" src="https://hips.hearstapps.com/hmg-prod/images/kendall-jenner-leaves-her-hotel-on-september-07-2019-in-new-news-photo-1567968063.jpg?crop=0.99992xw:1xh;center,top&resize=980:*"/>
                </div>

                <div>
                    <Tshirt />
                </div>
            </div>
        </div>
    )
}

export default Store