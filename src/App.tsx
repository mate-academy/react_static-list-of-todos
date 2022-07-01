import React from 'react';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

let currentUserIndex = 0;

export const preparedTodos = todos.map((todo) => {
  currentUserIndex = users[currentUserIndex].id === todo.userId
    ? currentUserIndex
    : users.findIndex((user) => user.id === todo.userId);

  return {
    ...todo,
    user: users[currentUserIndex] || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
