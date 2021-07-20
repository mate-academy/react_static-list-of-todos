import React from 'react';

import { TodoList } from './components/TodoList/TodoList';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(
  todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }),
);

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList tasks={preparedTodos} />
      </div>
      <p>Static list of todos</p>
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
