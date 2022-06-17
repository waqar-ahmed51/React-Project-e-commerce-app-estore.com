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
  border: 2px solid black;
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
  border-bottom: 0.2px solid white;
  color: white;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 15px;
`;
const SpecDetail = styled.p`
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 3;
  background-color: white;
  border-bottom: 0.2px solid black;
  font-size: 15px;
  &:hover {
    background-color: #e4e3e3;
    transition: all 0.2s ease;
  }
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
  display: flex;
  justify-content: flex-end;
  flex: 5;
  font-weight: 100;
  font-size: 30px;
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

const ProductView = () => {
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
            <SpectTitle>RAM </SpectTitle>
            <SpecDetail>16 GB</SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>ROM </SpectTitle>
            <SpecDetail>128 GB</SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>Processor </SpectTitle>
            <SpecDetail>Snapdragon 1080 </SpecDetail>
          </SpecContianer>
          <SpecContianer>
            <SpectTitle>Dual SIM </SpectTitle>
            <SpecDetail>Yes</SpecDetail>
          </SpecContianer>
          <ColorContainer>
            Color
            <Color color="6EA3C5" style={{ border: "3px solid black" }}></Color>
            <Color color="000000"></Color>
            <Color color="460000"></Color>
            <Color color="000746"></Color>
            <Color color="ffffff"></Color>
          </ColorContainer>
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
            <Price>12,0000 PKR</Price>
          </QuantityPrice>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductView;
