import Products from "../components/Products";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 20px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 59px - 279px);
`;

const ProductList = () => {
  return (
    <Container>
      <PageTitle />
      <ProductFilter />
      <Products />
    </Container>
  );
};

export default ProductList;
