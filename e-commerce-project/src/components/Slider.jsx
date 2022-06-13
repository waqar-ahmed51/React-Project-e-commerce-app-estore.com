import { KeyboardArrowLeftOutlined } from "@material-ui/icons";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-100vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  margin: 0px 20px;
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 30px 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  margin: 0px 20px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  height: 70%;
`;

const Slider = () => {
  const handledClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={handledClick("left")}>
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="b30808">
          <InfoContainer>
            <Title>BUY TECH NOW</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              porro exercitationem,perferendis a iste.
            </Desc>
            <Button>BUY NOW</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src="https://www.brostudiocz.com/wp-content/gallery/product-photography-on-white/hive-xl-front.jpg" />
          </ImageContainer>
        </Slide>
        <Slide bg="072122">
          <InfoContainer>
            <Title>BUY TECH NOW2</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              porro exercitationem,perferendis a iste.
            </Desc>
            <Button>BUY NOW</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src="https://www.brostudiocz.com/wp-content/gallery/product-photography-on-white/hive-xl-front.jpg" />
          </ImageContainer>
        </Slide>
        <Slide bg="e410c8">
          <InfoContainer>
            <Title>BUY TECH NOW3</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              porro exercitationem,perferendis a iste.
            </Desc>
            <Button>BUY NOW</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src="https://www.brostudiocz.com/wp-content/gallery/product-photography-on-white/hive-xl-front.jpg" />
          </ImageContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={handledClick("right")}>
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
