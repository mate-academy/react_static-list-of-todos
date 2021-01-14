import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(item => (
  {
    ...item,
    user: users.find(user => user.id === item.userId),
  }));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <TodoList preparedTodos={preparedTodos} />

      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
