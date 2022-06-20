import React from "react";
import styled from "styled-components";

const TotalTitle = styled.h1`
  color: #3e3e3e;
  border-right: 1px solid black;
  padding-right: 20px;
  font-size: 25px;
`;
const TotalPrice = styled.h1`
  margin-left: 20px;
`;

const TotalItems = styled.h1`
  font-size: 20px;
  padding-right: 77%;
  text-align: center;
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
  &:hover ${TotalItems} {
    color: white;
  }
`;
const TotalPriceCart = () => {
  return (
    <TotalPriceContainer>
      <TotalItems>(3 items)</TotalItems>
      <TotalTitle>Total </TotalTitle>
      <TotalPrice>3,60,000 PKR</TotalPrice>
    </TotalPriceContainer>
  );
};

export default TotalPriceCart;
