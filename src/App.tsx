import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(person => item.userId === person.id) || null,
}));

export const App: React.FC = () => (
  <div className="App">
    <h1>Static lists of todos</h1>

    <TodoList preparedTodos={preparedTodos} />
  </div>
);
