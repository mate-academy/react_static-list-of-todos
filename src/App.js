import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './api/TodoList';

const preparedTodos = todos.map((todo) => {
  const result = todo;

  if (users.find(u => u.id === todo.userId).name !== undefined) {
    result.user = users.find(u => u.id === todo.userId).name;
  } else {
    result.user = 'unknown user';
  }

  return result;
});

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

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
