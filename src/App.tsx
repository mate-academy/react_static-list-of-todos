import React from 'react';
import './App.scss';

import todosFromApi from './api/todos';
import usersFromApi from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todosFromApi.map(todoItem => {
  return {
    ...todoItem,
    user: usersFromApi.find((user) => user.id === todoItem.userId) || null,
  };
});

export const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
