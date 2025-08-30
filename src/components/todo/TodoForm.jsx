import useTodoStore from "../../stores/todoStore";
import { useState } from "react";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title: task, completed: false };
    addTask(newTask);
    console.log(useTodoStore.getState().tasks);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-[100%]">
      <input
        type="text"
        id="addTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task..."
        required
      />
    </form>
  );
};

export default TodoForm;
