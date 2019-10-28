import React from 'react';
import './App.css';
import Todolist from './components/Todolist/Todolist';
import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <Todolist todos={todos} users={users} />
  );
}

export default App;
