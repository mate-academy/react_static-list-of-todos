import React from 'react';
import './App.css';
import { todos } from "./todos.js";
import { users } from "./users.js";
import TodoList from "./TodoList.js";

function App() {

  return <TodoList todoList={todos} userList={users} />;
}

export default App;
