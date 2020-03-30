import React, { createContext, useReducer } from "react";
import todoListReducer from "./todoListReducer";

export const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || []
};

export const TodoListContext = createContext(initialState);

export const TodoListContextProvider = ({ children }) => {
  const [TodoListState, dispatch] = useReducer(todoListReducer, initialState);

  const addNewTask = newTask => {
    dispatch({ type: "NEW_TASK", payload: { newTask } });
  };

  const editTask = (id, newTask) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newTask } });
  };

  const deleteTask = id => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  return (
    <TodoListContext.Provider
      value={{ tasks: TodoListState.tasks, addNewTask, editTask, deleteTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
