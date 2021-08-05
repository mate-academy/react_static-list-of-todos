import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { ToDoList } from './components/ToDoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <h2>
          Todos:
          {todos.length}
        </h2>
      </p>

      <p>
        <h2>
          Users:
          {users.length}
        </h2>
      </p>

      <ToDoList list={preparedTodos} />
    </div>
  );
}

export default App;
