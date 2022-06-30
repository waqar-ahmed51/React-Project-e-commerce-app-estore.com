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
  handleAddItemCart = (item) => {
    console.log("Products ", item);
  };
  handleTest = () => {
    console.log("Test Prop");
  };
  render() {
    console.log("Products Props", this.props);
    return (
      <Container testprop={this.handleTest}>
        <ProductContainer>
          {popularProducts.map((item) => (
            <Product
              items={item}
              key={item.id}
              addItemCart={this.handleAddItemCart}
            />
          ))}
        </ProductContainer>
      </Container>
    );
  }
}

export default Products;
