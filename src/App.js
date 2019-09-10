import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import { getTodosWithUsers } from './getTodos';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <TodoList todos={preparedTodos} />
  );
}

export default App;
