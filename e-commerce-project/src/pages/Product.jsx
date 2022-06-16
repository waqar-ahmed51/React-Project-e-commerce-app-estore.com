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
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
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
          <Title>Iphone 13 pro max</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            numquam aperiam explicabo esse eius eaque vitae nihil, qui expedita
            dolorum itaque ullam nulla sapiente, eum sunt, aliquid sit. Nostrum,
            earum.
          </Desc>
          <Price>120000 PKR</Price>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
