import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import ProductFilter from "../components/ProductFilter";
import PageTitle from "../components/PageTitle";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <PageTitle />
      <ProductFilter />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
