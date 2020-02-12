import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList users={users} todos={todos} />
    </div>
  );
}

export default App;
