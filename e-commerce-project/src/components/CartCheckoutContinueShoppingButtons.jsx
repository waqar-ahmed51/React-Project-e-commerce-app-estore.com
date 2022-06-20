import { AddShoppingCart, ShoppingBasket } from "@material-ui/icons";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const ContinueShopping = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-right: 40px;
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Checkout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const CartCheckoutContinueShoppingButtons = () => {
  return (
    <ButtonsContainer>
      <ContinueShopping>
        <AddShoppingCart style={{ marginRight: "20px" }} />
        CONTINUE SHOPPING
      </ContinueShopping>
      <Checkout>
        <ShoppingBasket style={{ marginRight: "20px" }} />
        CHECKOUT
      </Checkout>
    </ButtonsContainer>
  );
};

export default CartCheckoutContinueShoppingButtons;
