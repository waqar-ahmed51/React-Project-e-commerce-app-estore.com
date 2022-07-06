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
    filteredProducts: allProducts,
  };

  handleSortBy = (sort) => {
    if (sort === "Price Low to High") {
      let filteredProducts = this.state.filteredProducts;
      filteredProducts.sort((a, b) => {
        return a.price - b.price; // FOR  LOW TO HIGH
      });
      this.setState({ filteredProducts });
    } else if (sort === "Price High to Low") {
      let filteredProducts = this.state.filteredProducts;
      filteredProducts.sort((a, b) => {
        return b.price - a.price; // FOR HIGH TO LOW
      });
      this.setState({ filteredProducts });
    } else {
      let filteredProducts = this.state.filteredProducts;
      filteredProducts = allProducts;
      this.setState({ filteredProducts });
    }

    console.log(sort);
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
        <ProductFilter category={category} sortByPorduct={this.handleSortBy} />
        <ProductContainer>
          {this.state.filteredProducts.map((item) =>
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
