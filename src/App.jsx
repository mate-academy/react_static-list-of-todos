import React from 'react';
import './App.scss';

// eslint-disable-next-line import/no-cycle
import { TodoList } from './TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map((todo) => {
  const todoData = { ...todo };

  todoData.user = users.find(person => person.id === todo.userId).name;

  return todoData;
});

export const App = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <div className="content">
      <TodoList />
    </div>
  </div>
);
