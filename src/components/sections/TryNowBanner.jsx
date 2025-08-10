import { BiArrowToRight } from "react-icons/bi";

const TryNowBanner = () => {
  return (
    <div id="banner">
      <h6>Try it Now!</h6>
      <h2>Ready to transform your productivity workflow?</h2>
      <button id="secondary">
        Try it Now!
        <BiArrowToRight />
      </button>
    </div>
  );
};

export default TryNowBanner;
