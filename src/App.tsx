import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';
import { prepareTodos } from './components/helper';

const preparedTodos = prepareTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
