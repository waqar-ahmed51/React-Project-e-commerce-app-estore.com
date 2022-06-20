import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductViewDetails from "../components/ProductViewDetails";

const ProductView = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductViewDetails />
      <Footer />
    </div>
  );
};

export default ProductView;
