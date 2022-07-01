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
    CartItemsDataInState: [],
  };

  render() {
    //Serail Number for the product.
    let Sno = 0;
    let totalPriceCartItems = 0;
    // Passing data from "data.js" to state
    // const CartItemsDataInState = CartItemsData;
    // this.setState(CartItemsDataInState);
    console.log("State Cart Items", this.state.CartItemsDataInState);
    return (
      <div>
        <Container>
          {/* Cart Items are loaded from the data.js */}
          {CartItemsData.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              Sn={++Sno}
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
