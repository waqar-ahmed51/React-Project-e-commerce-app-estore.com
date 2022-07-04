import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  background-color: #facfcf;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid red;
  position: fixed;
  left: 590px;
  z-index: 50;
  width: 30vw;
`;

const PopUpMessage = () => {
  return <Container>Error</Container>;
};

export default PopUpMessage;
