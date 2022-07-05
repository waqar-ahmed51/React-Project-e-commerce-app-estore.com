import Products from "../components/Products";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  margin: 0px 20px;
  min-height: calc(100vh - 59px - 279px);
`;

const ProductList = (props) => {
  //Getting category from url
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
      <ProductFilter category={category} />
      <Products category={category} addItemCart={props.addItemCart} />
    </Container>
  );
};

export default ProductList;
