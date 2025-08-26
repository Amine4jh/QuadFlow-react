import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { RiResetLeftFill } from "react-icons/ri";

const PomodoroContainer = () => {
  const totalTime = 25 * 60 * 1000;
  const [time, setTime] = useState(25 * 60 * 1000);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const fomattedTime = (time) => {
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor(time / 1000 / 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    setIsActive((prev) => !prev);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60 * 1000);
  };

  const progress = Math.floor(((totalTime - time) / totalTime) * 100);

  return (
    <div id="pomodoroContainer">
      <IoIosTimer id="headerIcon" />
      <h6>Focus Session</h6>
      <p>Time to concentrate on your tasks</p>
      <h1>{fomattedTime(time)}</h1>
      <div id="progressContainer">
        <div
          id="progressBar"
          style={{
            width: `${progress}%`,
            transition: "width 0.5s ease",
          }}
          className="h-5 bg-success rounded-xl"
        ></div>
      </div>
      <p id="prgsPerCent">
        <span>{progress}</span>% completed
      </p>
      <div id="actions">
        <button id="secondary" onClick={startTimer}>
          <IoPlayOutline />
          {isActive ? "Pause" : "Start"}
        </button>
        <button id="secondary" onClick={resetTimer}>
          <RiResetLeftFill />
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroContainer;
