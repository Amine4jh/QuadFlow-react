import Nav from "../components/layout/Nav";
import TasksContainer from "../components/TasksContainer";
import Footer from "../components/layout/Footer";

const TodoPage = () => {
  return (
    <div id="container">
      <Nav />
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
      <Footer />
    </div>
  );
};

export default TodoPage;
