import { BiArrowToRight } from "react-icons/bi";

const Hero = () => {
  return (
    <div id="hero">
      <h1 id="firstLine">Task Manager</h1>
      <h1 id="lastLine">Task Manager</h1>
      <p>
        Organize tasks, take notes, focus deeply, and plan your schedule—all in
        one beautiful dark-mode workspace. 4-in-1 Task Manager App
      </p>
      <button>
        Get Started Free
        <BiArrowToRight />
      </button>
    </div>
  );
};

export default Hero;
