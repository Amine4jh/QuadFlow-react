import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useTodoStore from "../../stores/todoStore";
// import { useEffect } from "react";

const TasksContainer = () => {
  const { removeTask, toggleTask, setFilter, filter, filteredTasks } =
    useTodoStore();
  const tasks = filteredTasks();
  const confirmMsg = "You want to delete this task, are you sure?";

  return (
    <>
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
          <small className="text-border text-xl text-center block my-6">
            No tasks yet!
          </small>
        )}
      </div>
      <div id="filter">
        <a
          id="all"
          className={filter === "all" ? "clicked" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </a>
        <a
          id="active"
          className={filter === "active" ? "clicked" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </a>
        <a
          id="completed"
          className={filter === "completed" ? "clicked" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </a>
      </div>
    </>
  );
};

export default TasksContainer;
