import React from 'react';
import './App.scss';
import './components/Todos/Todos.scss';
import './components/UserInfo/UserInfo.scss';

import { TodoList } from './components/Todos/TodoList';

import todos from './api/todos';
import users from './api/users';

const todosList: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(u => u.id === todo.userId) || null,
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList preparedTodos={todosList} />
  </div>
);
