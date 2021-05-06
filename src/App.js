import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = users.map((user) => {
  const obj = {};

  obj.user = user;
  obj.todos = todos.filter(todo => user.id === todo.userId);

  return obj;
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
      <TodoList preparedList={preparedTodos} />
    </div>

  );
}

export default App;
