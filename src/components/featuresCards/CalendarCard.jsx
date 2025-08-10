import { FaRegCalendarAlt } from "react-icons/fa";

const CalendarCard = () => {
  return (
    <div id="card">
      <div id="iconContainer">
        <FaRegCalendarAlt id="icon" />
      </div>
      <h3>Integrated Calendar</h3>
      <p>
        Visualize your schedule with tasks and events smoothly integrated in one
        view.
      </p>
    </div>
  );
};

export default CalendarCard;
