import { RiTwitterXFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Header = ({ logo }) => {
  return (
    <footer>
      <div id="footerContent">
        <div>
          <img src={logo} alt="logo" width={120} />
          <RiTwitterXFill />
          <RiGithubFill />
          <FaYoutube />
          <RiLinkedinFill />
        </div>
        <div>
          <h5>Features</h5>
          <a href="/">Todo Tasks</a>
          <a href="/">Taking Notes</a>
          <a href="/">Calendar</a>
          <a href="/">Pomodoro Timer</a>
        </div>
        <div>
          <h5>Us</h5>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Careers</a>
          <a href="/">Integrate with Us</a>
        </div>
        <div>
          <h5>Security</h5>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Security</a>
          <a href="/">Accessibility statement</a>
        </div>
      </div>
      <p>© 2025 QuadFlow. All rights reserved.</p>
    </footer>
  );
};

export default Header;
