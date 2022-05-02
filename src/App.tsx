import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((item) => ({
  ...item,
  user: users.find((person => person.id === item.userId)) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
