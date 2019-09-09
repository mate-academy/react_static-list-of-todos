import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from "./components/TodoList/TodoList"

const getTodosWithUsers = (todos, users) => {
  return todos.reduce((acc, todo) =>
    acc.concat({
      ...todo,
      user: users
        .find(user => user.id === todo.userId),
    })
  , []);
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
