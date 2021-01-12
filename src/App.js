import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './TodoList';

const preparedTodos = todos.map(toDo => ({
  ...toDo, user: users.find(user => user.id === toDo.userId),
}));

function App() {
  return (
    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
