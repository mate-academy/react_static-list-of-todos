import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
