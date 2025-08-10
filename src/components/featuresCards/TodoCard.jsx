import { FaTasks } from "react-icons/fa";

const TodoCard = () => {
  return (
    <div id="card">
      <div id="iconContainer">
        <FaTasks id="icon" />
      </div>
      <h3>To-Do Tasks</h3>
      <p>
        Organize your tasks with intelligent categorization, priority levels,
        and progress tracking.
      </p>
    </div>
  );
};

export default TodoCard;
