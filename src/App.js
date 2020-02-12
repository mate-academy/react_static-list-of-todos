import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(item => (
  {
    ...item,
    user: users[item.userId - 1],
  }));

function App() {
  return (
    <TodoList data={preparedTodos} />
  );
}

export default App;
