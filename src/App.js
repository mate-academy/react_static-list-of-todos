import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <TodoList todos={todos} users={users} />
  );
}

export default App;
