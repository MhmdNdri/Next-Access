import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Styles from "../styles/TodoList.module.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    console.log(todo, ...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((previous) =>
      previous.map((i) => (i.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <div className={Styles.cont}>
      <h1 className={Styles.h1}>Welcome To my Todo App </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={editTodo}
      />
    </div>
  );
};

export default TodoList;
