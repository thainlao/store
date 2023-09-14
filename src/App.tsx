import Mainbody from "./components/Mainbody/Mainbody";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./components/Store/Store";
import ProductDetail from "./components/Store/ProductDetails";
import CartItem from "./components/Store/CartItem";
import Favorites from "./components/Store/Favorites";
import Thanks from "./components/Store/Thanks";

function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Mainbody />}/>
        <Route path='/store' element={<Store />}/>
        <Route path="/store/product/:productId" element={<ProductDetail />} />
        <Route path="/store/cart" element={<CartItem />} />
        <Route path="/store/favorites" element={<Favorites />} />
        <Route path="/orderplaced" element={<Thanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
