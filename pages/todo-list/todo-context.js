import TaskListContextProvider from "../../contexts/TaskListContext";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";

const TodoContext = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default TodoContext;
