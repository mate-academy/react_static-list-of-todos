import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <h1 className="App">Static list of todos</h1>
      <TodoList todos={todos} users={users} />
    </>
  );
}

export default App;
