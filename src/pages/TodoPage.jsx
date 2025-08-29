import TasksContainer from "../components/todo/TasksContainer";
import TodoForm from "../components/todo/TodoForm";

const TodoPage = () => {
  return (
    <div id="featuresContent">
      <h1>To-Do List</h1>
      <p>Organize and track your daily tasks</p>
      <div id="todoList">
        <TodoForm />
        <TasksContainer />
      </div>
    </div>
  );
};

export default TodoPage;
