import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './componets/TodoList';

const preparedTodos = [];

users.forEach(user => preparedTodos.push({
  id: user.id,
  name: user.name,
}));

// eslint-disable-next-line no-restricted-syntax
for (const user of preparedTodos) {
  user.todosUser = todos.filter(todo => todo.userId === user.id);
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList users={preparedTodos} />
    </div>
  );
}

export default App;
