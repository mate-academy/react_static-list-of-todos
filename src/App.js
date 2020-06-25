import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

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
      <div className="head">
        <div className="head__item">Todo</div>
        <div className="head__item">User name</div>
        <div className="head__item">Status</div>
      </div>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
