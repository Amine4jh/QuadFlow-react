import { useState } from "react";
import FocusSession from "./FocusSession";
import RestSession from "./RestSession";

const PomodoroContainer = () => {
  const [showFirst, setShowFirst] = useState(true);
  return (
    <div id="pomodoroContainer">
      <button id="secondary" onClick={() => setShowFirst(!showFirst)}>
        {showFirst ? "Rest Session" : "Focus Session"}
      </button>
      {showFirst ? <FocusSession /> : <RestSession />}
    </div>
  );
};

export default PomodoroContainer;
