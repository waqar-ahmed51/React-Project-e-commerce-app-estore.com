import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h2`
  font-weight: 100;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
`;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SpecContianer = styled.div`
  display: flex;
  /* justify-content: center;
  align-content: center; */
`;
const SpectTitle = styled.p`
  background-color: black;
  border: 0.2px solid white;
  color: white;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const SpecDetail = styled.p`
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 3;
  background-color: white;
  border: 1px solid black;
  font-size: 20px;
`;

const QuantityPrice = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`;

const QuantityButton = styled.button`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 2px solid black;
  background-color: #e2e2e2;
  cursor: pointer;
`;
const Quantity = styled.p`
  font-size: 30px;
  margin: 0px 20px;
`;

const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  flex: 5;
  font-weight: 100;
  font-size: 40px;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  padding: 10px 10px;
  border-bottom: 1px solid black;
  /* justify-content: ; */
`;
const Color = styled.div`
  background-color: #${(props) => props.color};
  border: 1px solid black;
  margin-left: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>IPHONE 13 PRO</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            numquam aperiam explicabo esse eius eaque vitae nihil, qui expedita
            dolorum itaque ullam nulla sapiente, eum sunt, aliquid sit. Nostrum,
            earum.
          </Desc>
          <SpecContianer>
            <SpectTitle>RAM :</SpectTitle>
            <SpecDetail>16 GB</SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>ROM :</SpectTitle>
            <SpecDetail>128 GB</SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>Processor :</SpectTitle>
            <SpecDetail>Snapdragon 1080 </SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>Dual SIM :</SpectTitle>
            <SpecDetail>Yes</SpecDetail>
          </SpecContianer>
          <ColorContainer>
            Color :
            <Color color="6EA3C5" style={{ border: "3px solid black" }}></Color>
            <Color color="000000"></Color>
            <Color color="460000"></Color>
            <Color color="000746"></Color>
            <Color color="ffffff"></Color>
          </ColorContainer>
          <QuantityPrice>
            <QuantityButton>
              <Remove />
            </QuantityButton>
            <Quantity>9</Quantity>
            <QuantityButton>
              <Add />
            </QuantityButton>
            <Price>12,0000 PKR</Price>
          </QuantityPrice>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
