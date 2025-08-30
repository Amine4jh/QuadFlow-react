import { RiRestTimeLine } from "react-icons/ri";
import PomodoroContent from "./PomodoroContent";

const FocusSession = () => {
  return (
    <div>
      <RiRestTimeLine id="headerIcon" />
      <h6>Rest Session</h6>
      <p>Time to rest your mind</p>
      <PomodoroContent value={5 * 60 * 1000} />
    </div>
  );
};

export default FocusSession;
