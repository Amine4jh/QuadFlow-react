import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useTodoStore from "../../stores/todoStore";

const TasksContainer = () => {
  const { tasks, removeTask, toggleTask } = useTodoStore();
  const confirmMsg = "You want to delete this task, are you sure?";

  return (
    <div id="tasksContainer">
      {tasks.length > 0 ? (
        tasks.map((e) => (
          <div key={e.id} id="task" className={e.completed ? "complete" : ""}>
            <div>
              <div id="check" onClick={() => toggleTask(e.id)}>
                <FaCheck id="icon" />
              </div>
              <span>{e.title}</span>
            </div>
            <IoMdClose
              id="closeIcon"
              onClick={() => (confirm(confirmMsg) ? removeTask(e.id) : "")}
            />
          </div>
        ))
      ) : (
        <small className="text-border text-xl text-center block my-6">No tasks yet!</small>
      )}
    </div>
  );
};

export default TasksContainer;
