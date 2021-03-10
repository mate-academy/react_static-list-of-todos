import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

const preparedTodos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
