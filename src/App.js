import React from 'react';

import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

const preparedTodos = todos.map((todo) => {
  const copy = {
    ...todo,
    user: findUser(todo.userId),
  };

  return copy;
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

      <TodoList prepared={preparedTodos} />
    </div>
  );
}

export default App;
