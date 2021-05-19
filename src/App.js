import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

const preparedTodos = todos.map(todo => ({
  ...todo, user: findUser(todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <span>Todos: </span>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
