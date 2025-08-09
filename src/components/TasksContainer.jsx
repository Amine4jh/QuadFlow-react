import { FaCheck } from "react-icons/fa";

const TasksContainer = () => {
  return (
    <div id="tasksContainer">
      <div id="task">
        <div id="check">
          <FaCheck />
        </div>
        <span>Task 1</span>
      </div>
      <div id="task">
        <div id="check">
          <FaCheck />
        </div>
        <span>Task 2</span>
      </div>
      <div id="task">
        <div id="check">
          <FaCheck />
        </div>
        <span>Task 3</span>
      </div>
    </div>
  );
};

export default TasksContainer;
