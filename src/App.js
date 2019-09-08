import React from 'react';
import TodoList from './TodoList/TodoList';
import getTodosWithUsers from './common/getTodosWithUsers';

import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <button type="button" className="btn btn-primary">
          <span className="mr-2">Todos</span>
          <span className="badge badge-light">
            {todos.length}
          </span>
        </button>
      </p>

      <p>
        <button type="button" className="btn btn-secondary">
          <span className="mr-2">Users</span>
          <span className="badge badge-light">
            {users.length}
          </span>
        </button>
      </p>

      <div className="container">
        <div className="todo-list">
          <TodoList todos={preparedTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
