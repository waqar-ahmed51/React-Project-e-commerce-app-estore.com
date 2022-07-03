import styled from "styled-components";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import TotalPriceCart from "../components/TotalPriceCart";
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

  render() {
    //Serail Number for the product.
    let Sno = 0;
    let totalPriceCartItems = 0;
    let totalCartItems = 0;

    //Item id to fetch and modify data for the copy of cartitems in state CartItemsData
    let itemid=0; 
    const {cartItems,AddQuantity,RemoveQuantity,DeleteProduct}=this.props;
    return (
      <div>
        <Container>
          {/* Cart Items are loaded from the data.js */}
          {cartItems.map((item) => (
            <CartItem
              item_quantity={cartItems[itemid].quantity}
              item_quantity_price={cartItems[itemid].priceQuantity}
              item={item}
              itemid={itemid++}
              key={item.id}
              Sn={++Sno}
              AddQuantity={AddQuantity}
              RemoveQuantity={RemoveQuantity}
              DeleteProduct={DeleteProduct}
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
