import React, { Component } from "react";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { allProducts } from "../data";
import ProductListContainer from "../components/ProductListContainer";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

class ProductList extends Component {
  state = {
    finalStateProducts: allProducts,
    sortedProducts: allProducts,
    filteredProdcuts: allProducts,
  };

  handleSortBy = (sort) => {
    if (sort === "Price Low to High") {
      let sortedProducts = allProducts;
      sortedProducts.sort((a, b) => {
        return a.price - b.price; // FOR  LOW TO HIGH
      });
      this.setState({ sortedProducts: sortedProducts });
    } else if (sort === "Price High to Low") {
      let sortedProducts = this.state.finalStateProducts;
      sortedProducts.sort((a, b) => {
        return b.price - a.price; // FOR HIGH TO LOW
      });
      this.setState({ sortedProducts: sortedProducts });
    }
  };

  handlefilterProducts = (filter_1, filter_2) => {
    console.log("Both Filters : ", filter_1, filter_2);
    let filteredProdcuts = this.state.sortedProducts;

    let filter_products = filteredProdcuts.filter(function (product) {
      return product.specs.RAM === filter_1 && product.specs.ROM === filter_2;
    });
    this.setState({ finalStateProducts: filter_products });
    console.log("filter_products : ", filter_products);

    // if (filter_1 !== "RAM") {
    //   let filter_products = filteredProdcuts.filter(function (product) {
    //     return product.specs.RAM === filter_1;
    //   });
    //   this.setState({ finalStateProducts: filter_products });
    //   console.log("filter_products : ", filter_products);
    // }
    // if (filter_2 !== "ROM") {
    //   let filter_products = filteredProdcuts.filter(function (product) {
    //     return product.specs.ROM === filter_2;
    //   });
    //   this.setState({ finalStateProducts: filter_products });
    //   console.log("filter_products : ", filter_products);
    // }
  };

  // handlefilterProducts_2 = (filter_2) => {
  //   let filteredProdcuts = allProducts;

  //   let filter_2_products = filteredProdcuts.filter(function (product) {
  //     return product.specs.ROM === filter_2;
  //   });
  //   this.setState({ finalStateProducts: filter_2_products });
  //   // console.log(filter_2_products);
  // };

  render() {
    return (
      <Container>
        <PageTitle />
        <ProductFilter
          sortByPorduct={this.handleSortBy}
          filterProducts={this.handlefilterProducts}
        />
        <ProductListContainer
          addItemCart={this.props.addItemCart}
          finalStateProducts={this.state.finalStateProducts}
        />
      </Container>
    );
  }
}

export default ProductList;

// ----------------------------------------------------------------
