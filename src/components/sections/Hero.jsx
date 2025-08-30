import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <h1 id="firstLine">Task Manager</h1>
      <h1 id="lastLine">All-in-One</h1>
      <p>
        Organize tasks, take notes, focus deeply, and plan your schedule—all in
        one beautiful dark-mode workspace. 4-in-1 Task Manager App
      </p>
      <Link to="/features">
        <button id="primary">
          Get Started Free
          <BiArrowToRight id="icon" />
        </button>
      </Link>
    </section>
  );
};

export default Hero;
