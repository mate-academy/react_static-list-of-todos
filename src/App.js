import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

export function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <p className="App__text">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="App__text">
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList preparedTodos={preparedTodos} />
    </div>

  );
}
