import logo from "../assets/images/logo.png";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import WhyUs from "../components/sections/WhyUs";
import TryNowBanner from "../components/sections/TryNowBanner";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div id="container">
      <Header logo={logo} />
      <Hero />
      <Features />
      <WhyUs />
      <TryNowBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
