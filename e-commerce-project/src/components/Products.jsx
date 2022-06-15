import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Products = () => {
  return (
    <Container>
      <Title>Popular Products</Title>
      <ProductContainer>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Products;
