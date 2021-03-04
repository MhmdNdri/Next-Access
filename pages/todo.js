import React from "react";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import styles from "../styles/HomeTodo.module.css";

const todo = () => {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default todo;
