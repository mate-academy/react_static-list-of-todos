import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = users.map(user => ({
  fullName: user.name,
  id: user.id,
  tasks: todos.filter(task => task.userId === user.id),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
      <br />
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
        <br />
      </p>
    </div>
  );
}

export default App;
