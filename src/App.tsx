import React from 'react';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todoItem => {
  return {
    ...todoItem,
    user: users.find((user) => user.id === todoItem.userId) || null,
  };
});

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">List of todos:</h1>
    <TodoList todos={preparedTodos} />
  </div>
);
