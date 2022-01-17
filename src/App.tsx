import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(task => ({
  ...task,
  user: users.find(user => user.id === task.userId) || null,
}));

const App: React.FC = () => (
  <div className="App page">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
