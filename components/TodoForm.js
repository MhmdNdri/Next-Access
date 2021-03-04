import React, { useState } from "react";
import Styles from "../styles/TodoForm.module.css";
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };
  return (
    <div className={Styles.cont}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              className={Styles.input}
              type="text"
              placeholder="Edit Your Task ... "
              name="text"
              value={input}
              onChange={handleChange}
            />
            <button className={Styles.btnUpdate}>Update </button>
          </>
        ) : (
          <>
            <input
              className={Styles.input}
              type="text"
              placeholder="Add Task ... "
              name="text"
              value={input}
              onChange={handleChange}
            />
            <button className={Styles.btnAdd}>Add ToDo </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
