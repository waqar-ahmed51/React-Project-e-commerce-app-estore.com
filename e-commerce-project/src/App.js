import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
  
  // return <ProductList />;
  // return <ProductView />;
  // return <Register />;
  // return <SignIn />;
  // return <Cart />;
  // return <Checkout/>;
};

export default App;