import { SiStagetimer } from "react-icons/si";

const PomodoroCard = () => {
  return (
    <div id="card">
      <div id="iconContainer">
        <SiStagetimer id="icon" />
      </div>
      <h3>Pomodoro Timer</h3>
      <p>
        Boost productivity with customizable work sessions and break intervals.
      </p>
    </div>
  );
};

export default PomodoroCard;
