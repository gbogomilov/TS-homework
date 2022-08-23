import React, { ReactElement } from "react";
import AddTodo from "./Components/AddTodo";
import ToDoList from "./Components/ToDoList";
import VisibilityFilters from "./Components/VisibilityFilters";
import "./styles.css";

export default function TodoApp(): ReactElement {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <ToDoList />
      <VisibilityFilters />
    </div>
  );
}
