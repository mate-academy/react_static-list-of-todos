import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Static list of todos</h1>
        <div className="HeaderCounters">
          <span>
            Todos:
            {todos.length}
          </span>
          <span>
            Users:
            {users.length}
          </span>
        </div>
      </header>

      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
