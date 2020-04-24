import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './TodoList';

const preparedTodos = todos.map(todo => {
  const current = { ...todo };

  current.user = users.find(user => user.id === current.userId);

  return current;
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
      <TodoList listOfTodo={preparedTodos} />
    </div>
  );
}

export default App;
