import { Link } from "react-router-dom";
import TodoCard from "../featuresCards/TodoCard";
import NotesCard from "../featuresCards/NotesCard";
import CalendarCard from "../featuresCards/CalendarCard";
import PomodoroCard from "../featuresCards/PomodoroCard";

const Features = () => {
  return (
    <section id="features">
      <h2 id="firstLine">Everything You Need To</h2>
      <h2 id="lastLine">Stay Productive</h2>
      <p id="subTitle">
        Four powerful tools designed to work together seamlessly, eliminating
        the need to juggle multiple apps.
      </p>
      <div id="ftCardsContainer">
        <Link to="/features">
          <TodoCard />
        </Link>
        <Link to="/features/notes">
          <NotesCard />
        </Link>
        <Link to="/features/calendar">
          <CalendarCard />
        </Link>
        <Link to="/features/pomodoro">
          <PomodoroCard />
        </Link>
      </div>
    </section>
  );
};

export default Features;
