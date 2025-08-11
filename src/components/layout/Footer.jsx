import { RiTwitterXFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer>
      <div id="footerContent">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>
          <div id="iconContainer">
            <a href="/">
              <RiTwitterXFill id="icon" />
            </a>
            <a href="/">
              <RiGithubFill id="icon" />
            </a>
            <a href="/">
              <FaYoutube id="icon" />
            </a>
            <a href="/">
              <RiLinkedinFill id="icon" />
            </a>
          </div>
        </div>
        <div>
          <h5>Features</h5>
          <Link to="/features">Todo Tasks</Link>
          <Link to="/features/notes">Taking Notes</Link>
          <Link to="/features/calendar">Calendar</Link>
          <Link to="/features/pomodoro">Pomodoro Timer</Link>
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

export default Footer;
