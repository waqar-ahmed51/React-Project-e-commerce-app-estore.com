import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SigInForm from "../components/SigInForm";

const SignIn = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SigInForm />
      <Footer />
    </div>
  );
};

export default SignIn;
