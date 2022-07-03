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
     // fetching cart items from the CartItemsData fro data.js and putting in state.
    cartItems: CartItemsData,
   } 

   handleAddItemCart = (item) => {
    // We can not make changes directly to the state better create variable with the same name and then set with setstate.
    CartItemsData.push(item);
    const cartItemsTotalNum = CartItemsData.length;
    this.setState({ cartItemsTotalNum });
  };

  
  //Product Quantity and total price of the particular product
  onhandleAddQuantity = (id) => {
    //Updating the quanity in the state for the product
    const increment = ++CartItemsData[id].quantity;
    this.setState({ increment });
    //Updating the price per quantity in the state for the product
    let priceQuantityShow = (CartItemsData[id].priceQuantity +=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });

    // Updating navbar cart total quantity
    let cartItemsTotalNum=this.state.cartItemsTotalNum;
    cartItemsTotalNum++;
    // Preventing Cart total count to be negative
    if(cartItemsTotalNum<0){
      cartItemsTotalNum=0;
    }
    this.setState({cartItemsTotalNum})
  };

  //Decrease quantity of the product in the cart
  onhandleRemoveQuantity = (id) => {
    // Controlling quantity to go below 1
    if(CartItemsData[id].quantity>1){
    const decrement = --CartItemsData[id].quantity;
    this.setState({ decrement });
      //Updating the price per quantity in the state for the product
    let priceQuantityShow = (CartItemsData[id].priceQuantity -=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });

    // Updating navbar cart total quantity
    let cartItemsTotalNum=this.state.cartItemsTotalNum;
    cartItemsTotalNum--;
    // Preventing Cart total count to be negative
    if(cartItemsTotalNum<0){
      cartItemsTotalNum=0;
    }
    this.setState({cartItemsTotalNum})
  }  };

  // Deleteing products in the cart
  onhandleDeleteProduct=(itemid,  itemquantity)=>{
    var deleteItemsInCart = this.state.cartItems;
    deleteItemsInCart=this.state.cartItems.filter(function(deleteItemsInCart){
      return deleteItemsInCart.id !== itemid;
    });

    // Deleting all ojects in CartItemsData in data.js and pushing the filtered objects/items to CartItemsData data.js
    const start=0;
    const end=CartItemsData.length;
    CartItemsData.splice(start,end);
    deleteItemsInCart.filter(function(DataCartItemPush){
      CartItemsData.push(DataCartItemPush)
      return DataCartItemPush.id !== "x";
    });
    this.setState({cartItems: deleteItemsInCart});

    // Updating navbar cart total quantity - fetching from CartItem.jsx as parameter
    let cartItemsTotalNum=this.state.cartItemsTotalNum;
    cartItemsTotalNum=cartItemsTotalNum-itemquantity;
    // Preventing Cart total count to be negative
    if(cartItemsTotalNum<0){
      cartItemsTotalNum=0;
    }
    this.setState({cartItemsTotalNum})
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
          <Route path="/cart" element={<Cart 
          AddQuantity={this.onhandleAddQuantity}
          RemoveQuantity={this.onhandleRemoveQuantity}
          DeleteProduct={this.onhandleDeleteProduct}
          cartItems={this.state.cartItems}
          />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
 
export default App;