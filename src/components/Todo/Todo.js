import React, { useContext, useState } from "react";
import { TodoListContext } from "./../../context/TodoListContext";
import "./Todo.scss";

const Todo = ({ task }) => {
  const { editTask, deleteTask } = useContext(TodoListContext);
  const [isEditing, setIsEditing] = useState(false);
  const [inputState, setInputState] = useState(task.task);

  const editTaskHandler = id => {
    setIsEditing(true);
  };

  const deleteTaskHandler = id => {
    deleteTask(id);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  const onChangeHandler = e => {
    setInputState(e.target.value);
  };

  const submitHandler = (id, newValue) => {
    if (inputState === "") {
      alert("Ingresa una tarea por hacer");
      setInputState(task.task);
    } else if (inputState.length > 30) {
      alert("La tarea no puede tener más de 30 caracteres");
      setInputState(task.task);
    } else {
      editTask(id, newValue);
    }
    setIsEditing(false);
  };

  const todoContent = isEditing ? (
    <li className="todo">
      <form>
        <input value={inputState} onChange={onChangeHandler} />
        <div>
          <button onClick={() => submitHandler(task.id, inputState)}>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={cancelEditingHandler}>
            <i className="fas fa-window-close"></i>
          </button>
        </div>
      </form>
    </li>
  ) : (
    <li key={task.id} className="todo">
      {task.task}
      <div>
        <button onClick={() => editTaskHandler(task.id)}>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteTaskHandler(task.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );

  return todoContent;
};

export default Todo;
