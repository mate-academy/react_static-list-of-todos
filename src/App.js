import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

import './App.scss';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: findUser(todo.userId),
}));

function App() {
  return (
    <>
      <div className="Title">
        <h1>Static list of todos</h1>
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>

      <div className="App">
        <TodoList todos={preparedTodos} />
      </div>
    </>
  );
}

export default App;
