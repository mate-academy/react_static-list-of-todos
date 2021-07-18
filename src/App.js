import React from 'react';
import './App.scss';
import { TodoList } from './TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const checkTodos = todos.map((todo) => {
  const todoData = { ...todo };

  todoData.user = users.find(person => person.id === todo.userId);

  return todoData;
});

export const App = () => (
  <div className="app">
    <h1 className="title">Static list of todos</h1>
    <div className="content">
      <TodoList todos={checkTodos} />
    </div>
  </div>
);
