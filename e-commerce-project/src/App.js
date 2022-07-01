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
import { CartItemsData } from './data';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  state = { 
     cartItemsTotalNum : 0,
   } 

   handleAddItemCart = (item) => {
    // We can not make changes directly to the state better create variable with the same name and then set with setstate.
    CartItemsData.push(item);
    const cartItemsTotalNum = CartItemsData.length;
    this.setState({ cartItemsTotalNum });
  };
   
  render() { 
    return (
      <Router>
        <Navbar ItemsInCart={this.state.cartItemsTotalNum}/>
      <Routes>
          <Route path="/" element={<Home addItemCart={this.handleAddItemCart}/>} />
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