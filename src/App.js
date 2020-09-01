import React from 'react';
import { TodoList } from './TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
