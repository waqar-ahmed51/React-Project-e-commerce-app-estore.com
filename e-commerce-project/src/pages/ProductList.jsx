import Products from "../components/Products";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  margin: 0px 20px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const ProductList = () => {
  //Getting data from url
  let { category } = useParams();
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
      <ProductFilter />
      <Products />
    </Container>
  );
};

export default ProductList;
