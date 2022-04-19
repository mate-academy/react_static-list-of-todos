import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { ToDoUsersAll } from './components/types/ToDoUsersAll';
import { ToDoList } from './components/ToDoList/ToDoList';

const preparedTodos: Array<ToDoUsersAll> = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ToDoList todos={preparedTodos} />
    </div>
  );
};
