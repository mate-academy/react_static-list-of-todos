import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

export const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
