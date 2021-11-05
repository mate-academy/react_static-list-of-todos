import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = [...todos].map(todo => {
  const user = users.find(user1 => user1.id === todo.userId) || null;

  return { user, ...todo };
});

const App: React.FC = () => (
  <div className="container">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
