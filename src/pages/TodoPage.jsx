import TasksContainer from "../components/TasksContainer";

const TodoPage = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <p>Organize and track your daily tasks</p>
      <div id="todoList">
        <input type="text" id="addTask" required />
        <TasksContainer />
        <div id="filter">
          <a href="/">All</a>
          <a href="/">Active</a>
          <a href="/">Completed</a>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
