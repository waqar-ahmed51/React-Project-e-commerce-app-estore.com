import React, { Component } from "react";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { withRouter } from "react-router";
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
  state = {};
  componentDidMount() {
    const { category } = this.props.match.params;
    this.fetchData(category);
  }

  fetchData = (category) => {
    // ...
    console.log("------", category);
  };

  // let sortselected = "";
  handleSortBy = (sort) => {
    console.log(sort);
  };

  // getURLCategory = () => {
  //   let { category } = useParams();
  //   return category;
  // };

  render() {
    // let category = "phones";
    // let { category } = useParams();
    // this.getURLCategory();

    //Setting the Page Title
    let pagetitle = "Erorr";
    if (this.category === "laptops") {
      pagetitle = "LAPTOPS";
    } else if (this.category === "phones") {
      pagetitle = "PHONES";
    } else if (this.category === "headphones") {
      pagetitle = "HEADPHONES";
    }
    return (
      <Container>
        <PageTitle title={pagetitle} />
        <ProductFilter
          category={this.category}
          sortByPorduct={this.handleSortBy}
        />
        <ProductContainer>
          {allProducts.map((item) =>
            item.category === this.category ? (
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

export default withRouter(ProductList);

// ----------------------------------------------------------------
