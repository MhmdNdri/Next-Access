import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const TodoList = () => {
  return (
    <div className={styles.container}>
      <Link href="/todo-list/todo">
        <button className={styles.btn}>TodoList</button>
      </Link>
      <Link href="/todo-list/todo-context">
        <button className={styles.btn}>TodoList With Context</button>
      </Link>
    </div>
  );
};

export default TodoList;
