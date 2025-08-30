import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const TryNowBanner = () => {
  return (
    <div id="banner">
      <h6>Try it Now!</h6>
      <h2>Ready to transform your productivity workflow?</h2>
      <Link to="/features">
        <button id="secondary">
          Try it Now!
          <BiArrowToRight id="icon" />
        </button>
      </Link>
    </div>
  );
};

export default TryNowBanner;
