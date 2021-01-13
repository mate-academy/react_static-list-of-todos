import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todolist } from './components/todolist/Todolist';

const preparedTodos = todos.map(el => ({
  ...el,
  user: users.find(user => user.id === el.userId),
}));

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
      <Todolist list={preparedTodos} />
    </div>
  );
}

export default App;
