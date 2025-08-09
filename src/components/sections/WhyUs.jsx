import FirstCard from "../whyUsCards/FirstCard";
import SecondCard from "../whyUsCards/SecondCard";
import ThirdCard from "../whyUsCards/ThirdCard";
import FourthCard from "../whyUsCards/FourthCard";

const WhyUs = () => {
  return (
    <section id="whyUs">
      <h2 id="firstLine">Why This App Will Change</h2>
      <h2 id="lastLine">The Way You Work Forever</h2>
      <p>
        Time is your most valuable asset—and managing it shouldn't be a jumping
        act between multiple tools. Our All-in-One productivity platform is
        built for people who want to reclaim their focus, boost efficiency, and
        stay organized without the clutter.
      </p>
      <div id="usCardsContainer">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </section>
  );
};

export default WhyUs;
