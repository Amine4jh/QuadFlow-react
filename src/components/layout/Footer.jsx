import { RiTwitterXFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div id="footerContent">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>
          <div id="iconContainer">
            <a href="https://x.com/amine4jh" target="_blank">
              <RiTwitterXFill id="icon" />
            </a>
            <a href="https://github.com/Amine4jh" target="_blank">
              <RiGithubFill id="icon" />
            </a>
            <a href="https://www.youtube.com/@herosolvdev" target="_blank">
              <FaYoutube id="icon" />
            </a>
            <a href="https://www.linkedin.com/in/amineajaha/" target="_blank">
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
          <a href="https://github.com/Amine4jh" target="_blank">
            About Us
          </a>
          <Link to="*">Contact Us</Link>
          <Link to="*">Careers</Link>
          <Link to="*">Integrate with Us</Link>
        </div>
        <div>
          <h5>Security</h5>
          <Link to="*">Privacy Policy</Link>
          <Link to="*">Terms & Conditions</Link>
          <Link to="*">Security</Link>
          <Link to="*">Accessibility statement</Link>
        </div>
      </div>
      <p>© 2025 QuadFlow. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
