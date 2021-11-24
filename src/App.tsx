import React from 'react';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const todoWithOwner = {
    ...todo,
    user: users.find((user) => user.id === todo.userId) || null,
  };

  return todoWithOwner;
});

const App: React.FC = () => (
  <div className="App container">
    <h1>Todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
