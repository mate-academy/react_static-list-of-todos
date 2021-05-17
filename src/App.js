import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components';

const preparedTodos = [...todos];

preparedTodos.forEach((todo) => {
  const newTodo = todo;

  newTodo.user = users.find(user => user.id === newTodo.userId);

  return newTodo;
});

export function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}
