import React from 'react';
import { TodoList } from './api/components/TodoList/TodoList';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  return {
    todo: { ...todo },
    user: users.find(user => user.id === todo.userId) || null,
  };
});

export const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);
