import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

// import { StringLiteralLike } from 'typescript';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

export const App: React.FC = () => (
  <div className="App">
    <h1 className="page__title">Static list of todos</h1>
    <div>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);
