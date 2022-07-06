import React from 'react';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

import User from './types/User';

let currentUser: User;

export const preparedTodos = todos.map((todo) => {
  currentUser = users.find((user) => user.id === todo.userId) || currentUser;

  return {
    ...todo,
    user: currentUser || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
