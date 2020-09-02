import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="head">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);
