import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/index';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users[todo.userId - 1],
}));

function App() {
  return (
    <div className="App">
      <h1>List of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
