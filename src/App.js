import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users[item.userId - 1],
}));

const App = () => (
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
    <div className="todo">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
