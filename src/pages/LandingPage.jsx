import logo from "../assets/images/logo.png";
import Header from "../components/layout/Header";
import Features from "../components/sections/Features";

const LandingPage = () => {
  return (
    <div id="container">
      <Header logo={logo} />
      <Features />
    </div>
  );
};

export default LandingPage;
