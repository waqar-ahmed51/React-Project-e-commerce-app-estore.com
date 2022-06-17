import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 20px;
  height: 60vh;
`;

const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const ProducImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  flex: 1;
`;
const SNumber = styled.h4`
  position: absolute;
  left: 0;
  font-size: 20px;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProdctDetails = styled.div`
  /* background-color: #9ca141; */
  flex: 6;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2``;
const Desc = styled.p`
  margin: 3px;
  color: #565656;
  text-align: center;
`;

const ProdctPrice = styled.div`
  /* background-color: #09c40f; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const QuantityPrice = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`;

const QuantityButtonContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const QuantityButton = styled.button`
  padding: 3px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 1px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;
const Quantity = styled.p`
  font-size: 25px;
  margin: 0px 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 25px;
`;

const TotalTitle = styled.h1`
  color: #3e3e3e;
  border-right: 1px solid black;
  padding-right: 20px;
  font-size: 25px;
`;
const TotalPrice = styled.h1`
  margin-left: 20px;
`;

const TotalPriceContainer = styled.div`
  background-color: #e7e6e6;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  &:hover {
    background-color: black;
    transition: all 0.5s ease;
  }
  &:hover ${TotalTitle} {
    border-right: 1px solid white;
    color: white;
  }
  &:hover ${TotalPrice} {
    color: white;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <CartItem>
          <ProducImage>
            <SNumber>1.</SNumber>
            <ImageContainer>
              <Image src="https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg" />
            </ImageContainer>
          </ProducImage>
          <ProdctDetails>
            <Title>IPHONE 13 PRO</Title>
            <Desc>RAM : 6 GB | ROM : 128 GB | COLOR: BLUE</Desc>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nostrum quo veniam alias sunt laudantium iste soluta,
              vel, sequi recusandae dolore, possimus distinctio voluptate
              doloribus tempore commodi ratione incidunt eum!
            </Desc>
          </ProdctDetails>
          <ProdctPrice>
            <Price>12,0000 PKR</Price>
            <QuantityPrice>
              <QuantityButtonContainer>
                <QuantityButton>
                  <Remove />
                </QuantityButton>
                <Quantity>1</Quantity>
                <QuantityButton>
                  <Add />
                </QuantityButton>
              </QuantityButtonContainer>
            </QuantityPrice>
          </ProdctPrice>
        </CartItem>

        <CartItem>
          <ProducImage>
            <SNumber>2.</SNumber>
            <ImageContainer>
              <Image src="https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg" />
            </ImageContainer>
          </ProducImage>
          <ProdctDetails>
            <Title>IPHONE 13 PRO</Title>
            <Desc>RAM : 6 GB | ROM : 128 GB | COLOR: BLUE</Desc>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nostrum quo veniam alias sunt laudantium iste soluta,
              vel, sequi recusandae dolore, possimus distinctio voluptate
              doloribus tempore commodi ratione incidunt eum!
            </Desc>
          </ProdctDetails>
          <ProdctPrice>
            <Price>12,0000 PKR</Price>
            <QuantityPrice>
              <QuantityButtonContainer>
                <QuantityButton>
                  <Remove />
                </QuantityButton>
                <Quantity>1</Quantity>
                <QuantityButton>
                  <Add />
                </QuantityButton>
              </QuantityButtonContainer>
            </QuantityPrice>
          </ProdctPrice>
        </CartItem>

        <CartItem>
          <ProducImage>
            <SNumber>3.</SNumber>
            <ImageContainer>
              <Image src="https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg" />
            </ImageContainer>
          </ProducImage>
          <ProdctDetails>
            <Title>IPHONE 13 PRO</Title>
            <Desc>RAM : 6 GB | ROM : 128 GB | COLOR: BLUE</Desc>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nostrum quo veniam alias sunt laudantium iste soluta,
              vel, sequi recusandae dolore, possimus distinctio voluptate
              doloribus tempore commodi ratione incidunt eum!
            </Desc>
          </ProdctDetails>
          <ProdctPrice>
            <Price>12,0000 PKR</Price>
            <QuantityPrice>
              <QuantityButtonContainer>
                <QuantityButton>
                  <Remove />
                </QuantityButton>
                <Quantity>1</Quantity>
                <QuantityButton>
                  <Add />
                </QuantityButton>
              </QuantityButtonContainer>
            </QuantityPrice>
          </ProdctPrice>
        </CartItem>
        <TotalPriceContainer>
          <TotalTitle>Total </TotalTitle>
          <TotalPrice>3,60,000 PKR</TotalPrice>
        </TotalPriceContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
