/* eslint-disable max-len */
import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { User } from './types/User';
import { TodoWithUser } from './types/TodoWithUser';
import { TodoList } from './components/TodoList';

function getUser(userId: number): User | null {
  return usersFromServer.find(u => u.id === userId) || null;
}

export const todos: TodoWithUser[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
