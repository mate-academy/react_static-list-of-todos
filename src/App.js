import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id).name,
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p className="items-summary">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="items-summary">
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
