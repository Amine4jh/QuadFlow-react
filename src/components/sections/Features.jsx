import TodoCard from "../featuresCards/TodoCard";
import NotesCard from "../featuresCards/NotesCard";
import CalendarCard from "../featuresCards/CalendarCard";
import PomodoroCard from "../featuresCards/PomodoroCard";

const Features = () => {
  return (
    <section id="features">
      <h2 id="firstLine">Everything You Need To</h2>
      <h2 id="lastLine">Stay Productive</h2>
      <p>
        Four powerful tools designed to work together seamlessly, eliminating
        the need to juggle multiple apps.
      </p>
      <div className="ftCardsContainer">
        <TodoCard />
        <NotesCard />
        <CalendarCard />
        <PomodoroCard />
      </div>
    </section>
  );
};

export default Features;
