const Header = ({ logo }) => {
  return (
    <header>
      <img src={logo} alt="logo" width={120} />
      <div>
        <a href="/">Services</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <button id="primary">Try For Free!</button>
    </header>
  );
};

export default Header;
