import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  background-color: #facfcf;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid red;
`;

const ErrorMessge = () => {
  return <Container>Error</Container>;
};

export default ErrorMessge;
