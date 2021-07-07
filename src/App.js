import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(task => ({
  ...task,
  user: { ...users.find(user => user.id === task.userId) },
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
