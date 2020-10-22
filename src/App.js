import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { TableHeader } from './components/TableHeader';

const preparedTodos = [];

todos.forEach(todo => users.forEach((user) => {
  if (user.id === todo.userId) {
    preparedTodos.push({
      ...todo, user,
    });
  }
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <table>
        <TableHeader />
        <TodoList todos={preparedTodos} />
      </table>

    </div>
  );
}

export default App;
