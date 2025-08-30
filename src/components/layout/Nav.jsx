import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo" width={120} />
      </Link>
      <div>
        <NavLink
          to="/features"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          To-Do List
        </NavLink>
        <NavLink
          to="/features/notes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Notes
        </NavLink>
        <NavLink
          to="/features/calendar"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Calendar
        </NavLink>
        <NavLink
          to="/features/pomodoro"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Pomodoro
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
