import React, { Component } from "react";
import styled from "styled-components";
import { allProducts } from "../data";
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
    const categoryfilter = this.props.category;
    return (
      <Container>
        <ProductContainer>
          {allProducts.map((item) =>
            item.category === categoryfilter ? (
              <Product
                items={item}
                key={item.id}
                addItemCart={this.props.addItemCart}
              />
            ) : (
              // Just making condition dead - will not do anything for other produts
              console.log()
            )
          )}
        </ProductContainer>
      </Container>
    );
  }
}

export default Products;
