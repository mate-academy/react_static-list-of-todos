import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

import './App.scss';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(({ id }) => id === todo.userId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
