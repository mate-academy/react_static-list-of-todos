import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(
  todo => Object.assign(
    todo, { user: users.filter(user => user.id === todo.userId)[0] },
  ),
);

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
