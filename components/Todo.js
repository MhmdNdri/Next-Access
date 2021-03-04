import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Styles from "../styles/Todo.module.css";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div className={Styles.cont} key={todo.id}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className={Styles.btns}>
        <button
          className={Styles.btnDelete}
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className={Styles.btnEdit}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
