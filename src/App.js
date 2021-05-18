import React from 'react';
import './App.scss';
import { ToDoList } from './components/ToDoList';

import todos from './api/todos';
import users from './api/users';

const prepearedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

function App() {
  return (
    <main className="main">
      <ToDoList usersTodo={prepearedTodos} />
    </main>
  );
}

export default App;
