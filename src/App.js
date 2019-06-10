import React from 'react';
import './App.css';
import { todos } from './todos';
import { users } from './users';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoList todos={todos} users={users} />
  );
}

export default App;
