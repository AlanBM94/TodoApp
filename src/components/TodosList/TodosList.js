import React, { useContext } from "react";
import { TodoListContext } from "./../../context/TodoListContext";
import Todo from "./../Todo/Todo";
import "./TodosList.scss";

const TodosList = () => {
  const { tasks } = useContext(TodoListContext);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <ul className="todosList">
      {tasks.map(task => (
        <Todo task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TodosList;
