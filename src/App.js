import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './Components/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(({ id }) => id === todo.userId),
  }
));

export function App() {
  return (
    <div className="app">
      <h1 className="app__title"> List TODO </h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}
