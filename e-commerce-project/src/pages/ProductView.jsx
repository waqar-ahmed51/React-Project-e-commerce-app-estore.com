import ProductViewDetails from "../components/ProductViewDetails";
import { useParams } from "react-router-dom";

const ProductView = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <ProductViewDetails />
    </div>
  );
};

export default ProductView;
