import styled from "styled-components";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import TotalPriceCart from "../components/TotalPriceCart";

const Container = styled.div`
  margin: 20px;
`;

const Cart = () => {
  return (
    <div>
      <Container>
        <CartItem />
        <CartItem />
        <CartItem />
        <TotalPriceCart />
        <CartCheckoutContinueShoppingButtons />
      </Container>
    </div>
  );
};

export default Cart;
