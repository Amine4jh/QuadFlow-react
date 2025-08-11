import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import WhyUs from "../components/sections/WhyUs";
import TryNowBanner from "../components/sections/TryNowBanner";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div id="container">
      <Header />
      <Hero />
      <Features />
      <WhyUs />
      <TryNowBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
