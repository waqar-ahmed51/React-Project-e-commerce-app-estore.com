import { KeyboardArrowLeftOutlined } from "@material-ui/icons";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

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
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
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
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-left: 40px;
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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      //   console.log("Left");
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      //   console.log("Right");
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
            <ImageContainer>
              <Image src={items.img} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
