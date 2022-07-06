import React, { Component } from "react";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { allProducts } from "../data";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ProductList extends Component {
  state = {
    finalStateProducts: allProducts,
    sortedProducts: allProducts,
    filteredProdcuts: allProducts,
  };

  handleSortBy = (sort) => {
    if (sort === "Price Low to High") {
      let sortedProducts = this.state.sortedProducts;
      sortedProducts.sort((a, b) => {
        return a.price - b.price; // FOR  LOW TO HIGH
      });
      this.setState({ finalStateProducts: sortedProducts });
    } else if (sort === "Price High to Low") {
      let sortedProducts = this.state.sortedProducts;
      sortedProducts.sort((a, b) => {
        return b.price - a.price; // FOR HIGH TO LOW
      });
      this.setState({ finalStateProducts: sortedProducts });
    }
  };

  handlefilterProducts_1 = (filter_1) => {
    let filteredProdcuts = this.state.sortedProducts;
    this.setState({ filteredProdcuts });

    let filter_1_products = filteredProdcuts.filter(function (product) {
      return product.specs.RAM === filter_1;
    });
    this.setState({ finalStateProducts: filter_1_products });
    // console.log(filter_1_products);
  };
  handlefilterProducts_2 = (filter_2) => {
    let filteredProdcuts = this.state.sortedProducts;
    this.setState({ filteredProdcuts });

    let filter_2_products = filteredProdcuts.filter(function (product) {
      return product.specs.ROM === filter_2;
    });
    this.setState({ finalStateProducts: filter_2_products });
    // console.log(filter_2_products);
  };

  // getURLCategory = () => {
  //   let { category } = useParams();
  //   return category;
  // };

  render() {
    let category = "phones";
    // let { category } = useParams();
    // this.getURLCategory();

    //Setting the Page Title
    let pagetitle = "Erorr";
    if (category === "laptops") {
      pagetitle = "LAPTOPS";
    } else if (category === "phones") {
      pagetitle = "PHONES";
    } else if (category === "headphones") {
      pagetitle = "HEADPHONES";
    }
    return (
      <Container>
        <PageTitle title={pagetitle} />
        <ProductFilter
          category={category}
          sortByPorduct={this.handleSortBy}
          filterProducts_1={this.handlefilterProducts_1}
          filterProducts_2={this.handlefilterProducts_2}
        />
        <ProductContainer>
          {this.state.finalStateProducts.map((item) =>
            item.category === category ? (
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

export default ProductList;

// ----------------------------------------------------------------
