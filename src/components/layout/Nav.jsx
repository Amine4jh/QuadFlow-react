import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" width={120} />
      <div>
        <Link to="/features">To-Do List</Link>
        <Link to="/features/notes">Notes</Link>
        <Link to="/features/calendar">Calendar</Link>
        <Link to="/features/pomodoro">Pomodoro</Link>
      </div>
    </nav>
  );
};

export default Nav;
