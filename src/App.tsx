import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(todo => {
  const foundUser = users.find(user => user.id === todo.userId) || null;

  return { user: foundUser, ...todo };
});

const App: React.FC = () => (
  <div className="container">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
