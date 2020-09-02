import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

export const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <p>
      <span>Todos: </span>
      {todos.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <TodoList todos={preparedTodos} />
  </div>
);
