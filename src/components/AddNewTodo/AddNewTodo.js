import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListContext } from "./../../context/TodoListContext";
import "./AddNewTodo.scss";

const AddNewTodo = () => {
  const [inputState, setInputState] = useState("");
  const { addNewTask } = useContext(TodoListContext);

  const createTask = () => {
    const newTask = {
      id: uuidv4(),
      task: inputState
    };
    addNewTask(newTask);
  };
  

  const validateTask = () => {
    if (inputState === "") {
      alert("Ingresa una tarea por hacer");
    } else if (inputState.length > 30) {
      alert("La tarea no puede tener más de 30 caracteres");
    } else {
      createTask();
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    validateTask();
    setInputState("");
  };

  const onChangeHandler = e => {
    setInputState(e.target.value);
  };

  return (
    <form className="newTodo" onSubmit={onSubmitHandler}>
      <input
        placeholder="Nueva tarea"
        onChange={onChangeHandler}
        className="newTodo__input"
        value={inputState}
        name="newTask"
        autoComplete="off"
      />
      <button className="newTodo__button">Agregar</button>
    </form>
  );
};

export default AddNewTodo;
