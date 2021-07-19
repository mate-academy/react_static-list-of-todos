import React from 'react';
import './App.scss';
import { TodoList } from './TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="app">
    <h1 className="title">Static list of todos</h1>
    <div className="content">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);
