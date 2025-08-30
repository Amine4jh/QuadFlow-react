import { IoIosTimer } from "react-icons/io";
import PomodoroContent from "./PomodoroContent";

const FocusSession = () => {
  return (
    <div>
      <IoIosTimer id="headerIcon" />
      <h6>Focus Session</h6>
      <p>Time to concentrate on your tasks</p>
      <PomodoroContent value={25 * 60 * 1000} />
    </div>
  );
};

export default FocusSession;
