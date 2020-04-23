import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';
import { getTodosWithUsers } from './api/data';

const preparedTodos = getTodosWithUsers(todos, users);

const App = () => (
  <>
    <h1 className="static-list__title">Static List of Todos</h1>
    <div className="container">
      <TodoList todos={preparedTodos} />
    </div>
  </>
);

export default App;
