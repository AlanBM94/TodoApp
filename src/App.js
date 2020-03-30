import React from "react";
import TodoContainter from "./components/TodoContainer/TodoContainer";
import Title from "./components/Title/Title";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import TodosList from "./components/TodosList/TodosList";
import { TodoListContextProvider } from "./context/TodoListContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoListContextProvider>
        <TodoContainter>
          <Title />
          <AddNewTodo />
          <TodosList />
        </TodoContainter>
      </TodoListContextProvider>
    </div>
  );
}

export default App;
