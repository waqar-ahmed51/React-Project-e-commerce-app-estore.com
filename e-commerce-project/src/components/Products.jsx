import React, { Component } from "react";
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
class Products extends Component {
  state = {};
  render() {
    // console.log("Products Props", this.props);
    return (
      <Container>
        <ProductContainer>
          {popularProducts.map((item) => (
            <Product
              items={item}
              key={item.id}
              addItemCart={this.props.addItemCart}
            />
          ))}
        </ProductContainer>
      </Container>
    );
  }
}

export default Products;
