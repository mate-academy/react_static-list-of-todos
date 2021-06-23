import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './componets/TodoList';

const preparedTodos = [...todos];

// eslint-disable-next-line no-restricted-syntax
for (const todo of preparedTodos) {
  todo.User = users.find(user => todo.userId === user.id);
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
