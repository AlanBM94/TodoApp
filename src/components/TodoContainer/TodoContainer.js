import React from "react";
import "./TodoContainer.scss";

const TodoContainer = ({ children }) => {
  return <div className="todoContainer">{children}</div>;
};

export default TodoContainer;
