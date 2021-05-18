import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <main className="main">
      <TodoList todos={todos} users={users} />
    </main>
  );
}

export default App;
