import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import preparedTodos from './api/preparedTodos';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <div>
        <TodoList preparedTodos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
