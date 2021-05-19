import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const prepearedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

function App() {
  return (
    <main className="main">
      <TodoList Todos={prepearedTodos} />
    </main>
  );
}

export default App;
