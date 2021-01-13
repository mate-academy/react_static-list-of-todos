import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './component/TodoList/TodoList';

const prepareTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <div className="App__info">
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>
        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <TodoList todos={prepareTodos} />
    </div>
  );
}

export default App;
