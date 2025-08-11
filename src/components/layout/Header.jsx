import { Link } from "react-scroll";

const Header = ({ logo }) => {
  return (
    <header>
      <img src={logo} alt="logo" width={120} />
      <div>
        <Link to="features" spy={true} smooth={true} offset={-50} duration={500}>Services</Link>
        <Link to="whyUs" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <a href="/">Contact</a>
      </div>
      <button id="primary">Try For Free!</button>
    </header>
  );
};

export default Header;
