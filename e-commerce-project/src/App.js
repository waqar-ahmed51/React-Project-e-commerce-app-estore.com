import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {

  return (
    <Router>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productview/:id" element={<ProductView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
  
  // return <ProductList />;
  // return <ProductView />;
  // return <Register />;
  // return <SignIn />;
  // return <Cart />;
  // return <Checkout/>;
};

export default App;