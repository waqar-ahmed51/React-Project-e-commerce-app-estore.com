import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const ProductTitleSpace = styled.div`
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #000000;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductTitle = styled.h3`
  color: white;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8b8b8b;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${ProductTitle} {
    transition: all 0.3s ease;
    transform: scale(1.3);
    color: black;
  }
  &:hover ${ProductTitleSpace} {
    transition: all 0.5s ease;
    background-color: white;
    border: 1px solid black;
    /* background-color: transparent; */
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000000;
    color: white;
    transform: scale(1.4);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <ProductTitleSpace>
        <ProductTitle>{item.title}</ProductTitle>
      </ProductTitleSpace>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
