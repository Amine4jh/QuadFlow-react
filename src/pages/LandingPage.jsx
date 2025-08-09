import logo from "../assets/images/logo.png";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

const LandingPage = () => {
  return (
    <div id="container">
      <Header logo={logo} />
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
