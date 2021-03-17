import React from 'react';
import { TodoList } from './TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(
  todo => ({
    ...todo,
    user: users.find(({ id }) => id === todo.userId),
  }),
);

export const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);
