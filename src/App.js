import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const body = document.querySelector('BODY');

body.style.margin = '0';
body.style.padding = '0';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <>
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
      </div>

      <TodoList tasks={preparedTodos} />
    </>
  );
}

export default App;
