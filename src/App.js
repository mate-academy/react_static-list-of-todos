/* eslint-disable no-param-reassign */
import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

const preparedTodos = todosFromServer.map((todo) => {
  // eslint-disable-next-line prefer-destructuring
  todo.user = usersFromServer
    .filter(user => user.id === todo.userId)[0];

  return todo;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
