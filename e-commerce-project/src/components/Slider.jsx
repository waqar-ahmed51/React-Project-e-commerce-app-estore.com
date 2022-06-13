import { KeyboardArrowLeftOutlined } from "@material-ui/icons";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
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
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  width: 100vw;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
