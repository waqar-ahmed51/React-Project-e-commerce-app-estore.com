import React, { Component } from 'react';
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

class App extends Component {
  state = { 
     cartItems : [
      {
          id: 1,
          // Comment the image below of laptop during development its a heavy image 
          img: "https://www.pngmart.com/files/4/Macbook-PNG-Photo.png",
          // img: "https://cdn2-imgix.macpaw.com/images/content/en_1633513105.png?auto=format&fm=png&ixlib=php-3.3.1&q=60&w=468",
          title: "LAPTOPS 30% OFF",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro exercitationem,perferendis a iste.",
          bg: "ebfcf5",
          link: "/laptops",
      },
  ],

   } 
   
  render() { 
    return (
      <Router>
        <Navbar ItemsInCart={this.state.cartItems.length}/>
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
  }
}
 
export default App;