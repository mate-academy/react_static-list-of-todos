import React from 'react';
import './App.scss';
import { TodoList } from './component/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <TodoList todos={preparedTodos} />
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
