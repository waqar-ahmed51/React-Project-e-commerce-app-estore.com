import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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

// let sortselected = "";
function handleSortBy(sort) {
  console.log(sort);
}

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
  // ----------------------------------------------------------------
  return (
    <Container>
      <PageTitle title={pagetitle} />
      <ProductFilter category={category} sortByPorduct={handleSortBy} />
      <ProductContainer>
        {allProducts.map((item) =>
          item.category === category ? (
            <Product
              items={item}
              key={item.id}
              addItemCart={props.addItemCart}
            />
          ) : (
            // Just making condition dead - will not do anything for other produts
            console.log()
          )
        )}
      </ProductContainer>
    </Container>
  );
};

export default ProductList;
