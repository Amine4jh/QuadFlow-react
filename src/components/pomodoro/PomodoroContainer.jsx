import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { RiResetLeftFill } from "react-icons/ri";

const PomodoroContainer = () => {
  const [time, setTime] = useState(25 * 60 * 1000);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
    }
  }, [isActive, time]);

  const fomattedTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / 1000 / 60);
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  return (
    <div id="pomodoroContainer">
      <IoIosTimer />
      <h6>Focus Session</h6>
      <p>Time to concentrate on your tasks</p>
      <h1>{fomattedTime(time)}</h1>
      <div id="progress"></div>
      <p>
        <span>0</span>% completed
      </p>
      <div id="actions">
        <button id="secondary" onClick={startTimer} disabled={isActive}>
          <IoPlayOutline />
          Start
        </button>
        <button id="secondary">
          <RiResetLeftFill />
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroContainer;
