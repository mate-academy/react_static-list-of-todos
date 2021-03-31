import React from 'react';
import { TodoList } from './components/TodoList';

import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id).name,
}));

function App() {
  return (
    <div className="App container text-center bg-secondary">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
