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

const Products = () => {
  return (
    <Container>
      <ProductContainer>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Products;
