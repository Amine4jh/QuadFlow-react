import { IoIosTimer } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { RiResetLeftFill } from "react-icons/ri";

const PomodoroContainer = () => {
  return (
    <div id="pomodoroContainer">
      <IoIosTimer />
      <h6>Focus Session</h6>
      <p>Time to concentrate on your tasks</p>
      <h1>25:00</h1>
      <div id="progress"></div>
      <p>
        <span>0</span>% completed
      </p>
      <div id="actions">
        <button>
          <IoPlayOutline />
          Start
        </button>
        <button>
          <RiResetLeftFill />
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroContainer;
