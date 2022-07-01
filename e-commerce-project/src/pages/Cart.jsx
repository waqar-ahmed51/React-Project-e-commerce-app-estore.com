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
    test: 0,
    // fetching cart items from the CartItemsData fro data.js and putting in state.
    cartItems: CartItemsData,
  };
  // constructor() {
  //   super();
  //   const cartItems = CartItemsData;
  //   this.setState({ cartItems });
  //   console.log(this.state.cartItems);
  // }

  //Product Quantity and total price of the particular product
  onhandleAddQuantity = (id) => {
    console.log("onhandleAddQuantity", CartItemsData[id]);
    
    const increment = ++CartItemsData[id].quantity;
    this.setState({ increment });

    let priceQuantityShow = (CartItemsData[id].priceQuantity +=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });
  };
  onhandleRemoveQuantity = (id) => {
    console.log("onhandleRemoveQuantity", CartItemsData[id]);
    const decrement = --CartItemsData[id].quantity;
    console.log(CartItemsData[id].priceQuantity);
    this.setState({ decrement });
  };

  render() {
    //Serail Number for the product.
    console.log(this.state.cartItems);
    let Sno = 0;
    let totalPriceCartItems = 0;
    return (
      <div>
        <Container>
          {/* Cart Items are loaded from the data.js */}
          {this.state.cartItems.map((item) => (
            <CartItem
              item_quantity={this.state.cartItems[item.id].quantity}
              item_quantity_price={this.state.cartItems[item.id].priceQuantity}
              item={item}
              key={item.id}
              Sn={++Sno}
              AddQuantity={this.onhandleAddQuantity}
              RemoveQuantity={this.onhandleRemoveQuantity}
              totalPriceCartItems={(totalPriceCartItems += item.price)}
            />
          ))}

          {Sno > 0 ? (
            <div>
              <TotalPriceCart
                totalItems={Sno}
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
