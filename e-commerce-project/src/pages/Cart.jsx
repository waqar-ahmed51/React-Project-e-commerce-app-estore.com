import styled from "styled-components";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import TotalPriceCart from "../components/TotalPriceCart";
import { CartItemsData } from "../data";
import React, { Component } from "react";

const Container = styled.div`
  margin: 0px 20px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const NothingCart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  font-size: 40px;
`;

class Cart extends Component {
  state = {
    // fetching cart items from the CartItemsData fro data.js and putting in state.
    cartItems: CartItemsData,
  };

  //Product Quantity and total price of the particular product
  onhandleAddQuantity = (id) => {
    console.log("onhandleAddQuantity", CartItemsData[id]);

    //Updating the quanity in the state for the product
    const increment = ++CartItemsData[id].quantity;
    this.setState({ increment });
    

    //Updating the price per quantity in the state for the product
    let priceQuantityShow = (CartItemsData[id].priceQuantity +=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });
  };
  onhandleRemoveQuantity = (id) => {
    console.log("onhandleRemoveQuantity", CartItemsData[id]);

    // Controlling quantity to go below 1
    if(CartItemsData[id].quantity>1){
    const decrement = --CartItemsData[id].quantity;
    console.log(CartItemsData[id].priceQuantity);
    this.setState({ decrement });
      //Updating the price per quantity in the state for the product
    let priceQuantityShow = (CartItemsData[id].priceQuantity -=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });
  }  };
  onhandleDeleteProduct=(itemid)=>{
    console.log("Delete clicked", itemid)
    var deleteItemsInCart = this.state.cartItems;
    console.log("deleteItemsInCart Before : ",deleteItemsInCart);
    deleteItemsInCart=this.state.cartItems.filter(function(deleteItemsInCart){
      return deleteItemsInCart.id !== itemid;
    });
    // Deleting all ojects in CartItemsData in data.js and pushing the filtered objects/items to CartItemsData data.js
    const start=0;
    const end=CartItemsData.length;
    CartItemsData.splice(start,end);


    deleteItemsInCart.filter(function(DataCartItemPush){
      console.log("Test",DataCartItemPush);
      CartItemsData.push(DataCartItemPush)
      return DataCartItemPush.id !== "x";
    });


    // 

    console.log("deleteItemsInCart After : ",deleteItemsInCart);
    this.setState({cartItems: deleteItemsInCart});
  };

  render() {
    //Serail Number for the product.
    console.log("State Items Cart", this.state.cartItems);
    console.log("Data Items Cart", CartItemsData);
    let Sno = 0;
    let totalPriceCartItems = 0;
    let totalCartItems = 0;

    //Item id to fetch and modify data for the copy of cartitems in state CartItemsData
    let itemid=0; 

    return (
      <div>
        <Container>
          {/* Cart Items are loaded from the data.js */}
          {this.state.cartItems.map((item) => (
            <CartItem
              item_quantity={this.state.cartItems[itemid].quantity}
              item_quantity_price={this.state.cartItems[itemid].priceQuantity}
              item={item}
              itemid={itemid++}
              key={item.id}
              Sn={++Sno}
              AddQuantity={this.onhandleAddQuantity}
              RemoveQuantity={this.onhandleRemoveQuantity}
              DeleteProduct={this.onhandleDeleteProduct}
              totalPriceCartItems={(totalPriceCartItems += item.priceQuantity)}
              totalCartItems={(totalCartItems += item.quantity)}
            />
          ))}

          {Sno > 0 ? (
            <div>
              <TotalPriceCart
                totalItems={totalCartItems}
                totalPriceCartItems={totalPriceCartItems}
              />
              <CartCheckoutContinueShoppingButtons />
            </div>
          ) : (
            <NothingCart>
              <h1>Nothing In Cart!</h1>
              <h4>Go back to add items to cart.</h4>
            </NothingCart>
          )}
        </Container>
      </div>
    );
  }
}

export default Cart;
