import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(({ id }) => id === todo.userId),
}));

function App() {
  return (
    <div className="app">
      <h1>Static list of todos</h1>
      <p>
        <span>
          <b>Todos: </b>
          {todos.length}
          {' | '}
        </span>

        <span>
          <b>Users: </b>
          {users.length}
        </span>
      </p>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
