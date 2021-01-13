import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  const preparedTodos = todos.map(task => ({
    ...task,
    user: users.find(user => user.id === task.userId),
  }));

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

      <TodoList tasks={preparedTodos} />
    </div>
  );
}

export default App;
