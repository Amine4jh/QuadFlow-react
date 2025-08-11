import logo from '../../assets/images/logo.png'

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" width={120} />
      <div>
        <a href="/">To-Do List</a>
        <a href="/">Notes</a>
        <a href="/">Calendar</a>
        <a href="/">Pomodoro</a>
      </div>
    </nav>
  );
};

export default Nav;
