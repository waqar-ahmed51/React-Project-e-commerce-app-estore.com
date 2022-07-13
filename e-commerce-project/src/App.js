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
import { allProducts,CartItemsData,totaPriceOfCartItemsData } from './data';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    //Preventing duplication product to cart
    itemsIDsStorage:[],

     cartItemsTotalNum : 0,
     // fetching cart items from the CartItemsData fro data.js and putting in state.
    cartItems: CartItemsData,
    //Data in state for the checkout page. Total Cost of the items in cart to checkout page.
    totalPriceCartItems: totaPriceOfCartItemsData,

    //For fetching the API data.
    items: [],
    DataisLoaded: false
   } 

   handleAddItemCart = (item) => {
    console.log("Test which item is passed to cart :", item.id);
    console.log("Ids storgae :", this.state.itemsIDsStorage);
    let itemsIDsStorage=this.state.itemsIDsStorage;
    if(!itemsIDsStorage.includes(item.id)){
      CartItemsData.push(item);
      this.setState({cartItems:CartItemsData});
      //Preventing duplication product to be added in cart - based on state itemsIDsStorage (keeps ids for the products)
      itemsIDsStorage.push(item.id);
      this.setState({itemsIDsStorage})

      let cartItemsTotalNum = this.state.cartItemsTotalNum;
      cartItemsTotalNum++;
      this.setState({ cartItemsTotalNum });
    }else{
      console.log("Item exsists in Ids storgae in state");
    }
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
      CartItemsData.push(DataCartItemPush);
      return DataCartItemPush.id !== "nothing";
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
    //Deleting IDs from itemsIDsStorage Array in state so User can add product again to cart.
    let itemsIDsStorage=this.state.itemsIDsStorage;
    let index=itemsIDsStorage.indexOf(itemid);
    itemsIDsStorage[index]=99999;
    this.setState({itemsIDsStorage});
  };

  componentDidMount() {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
  }

  
   
  render() { 
    console.log("Test",this.state.items.products);

    const { DataisLoaded} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
    return (
      <Router>
        {/* <h2 key="{test.id}"">{test}</h2> */}
        <Navbar ItemsInCart={this.state.cartItemsTotalNum}/>
      <Routes>
          <Route path="/" element={<Home addItemCart={this.handleAddItemCart}/>} />
          <Route path="/productlist/:category" element={<ProductList addItemCart={this.handleAddItemCart}/>} />
          <Route path="/productview/:id" element={<ProductView addItemCart={this.handleAddItemCart}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart 
          AddQuantity={this.onhandleAddQuantity}
          RemoveQuantity={this.onhandleRemoveQuantity}
          DeleteProduct={this.onhandleDeleteProduct}
          cartItems={this.state.cartItems}
          />} />
          <Route path="/checkout" element={<Checkout 
          totalCartItems={this.state.cartItemsTotalNum}
          totalPriceCartItems={this.state.totalPriceCartItems}
          />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
 
export default App;