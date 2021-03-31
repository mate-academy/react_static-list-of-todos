import React from 'react';
import { TodoList } from './conponents/TodoList';
import './app.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId).name,
}));

export const App = () => (
  <div className="app">
    <h1>Static list of todos</h1>
    <p className="app__todos">
      <span>Todos: </span>
      {todos.length}
    </p>

    <p className="add__todos">
      <span>Users: </span>
      {users.length}
    </p>
    <TodoList todoList={preparedTodos} />
  </div>
);
