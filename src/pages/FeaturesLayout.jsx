import Nav from "../components/layout/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

const FeaturesLayout = () => {
  return (
    <div id="container">
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default FeaturesLayout;
