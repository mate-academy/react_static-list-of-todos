import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <main className="main">
      <TodoList todos={todos} users={users} />
    </main>
  );
}

export default App;
