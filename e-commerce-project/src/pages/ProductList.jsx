import Products from "../components/Products";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";

const ProductList = () => {
  return (
    <div>
      <PageTitle />
      <ProductFilter />
      <Products />
    </div>
  );
};

export default ProductList;
