import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import  Grocery  from "./pages/Grocery";
import Fashion from "./pages/Fashion";
import  Electronics from "./pages/Electronics";
import  Mobiles  from "./pages/Mobiles";
import  Footwear  from "./pages/Footwear";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/footwear" element={<Footwear />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
