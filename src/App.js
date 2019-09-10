import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoCounter from './Counters/TodoCounter';
import UserCounter from './Counters/UserCounter';
import getTodosWithUsers from './utils/getTodosWithUsers';

import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoCounter todos={todos} />
      <UserCounter users={users} />
      <div className="container">
        <div className="todo-list">
          <TodoList todos={preparedTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
