import React from 'react';
import { TodoList } from './component/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={todos} users={users} />
    </div>
  );
}

export default App;
