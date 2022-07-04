import React from 'react';
import './App.scss';
import { PreparedTodos } from './components/interfaces/interfaces';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: PreparedTodos[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos:</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
