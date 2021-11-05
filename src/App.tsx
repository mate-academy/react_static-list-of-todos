import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { NewTodo } from './types';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: NewTodo[] = todos.map(deal => ({
  ...deal,
  user: users.find((user) => user.id === deal.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__text">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
