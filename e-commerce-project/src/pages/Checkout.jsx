import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import ShippingPayment from "../components/ShippingPayment";

const Checkout = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ShippingPayment />
      <Footer />
    </div>
  );
};

export default Checkout;
