import styled from "styled-components";
import Announcement from "../components/Announcement";
import CartCheckoutContinueShoppingButtons from "../components/CartCheckoutContinueShoppingButtons";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TotalPriceCart from "../components/TotalPriceCart";

const Container = styled.div`
  margin: 20px;
`;

const Cart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <CartItem />
        <CartItem />
        <CartItem />
        <TotalPriceCart />
        <CartCheckoutContinueShoppingButtons />
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
