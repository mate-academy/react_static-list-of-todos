import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

// eslint-disable-next-line max-len
const preparedTodos = todos.map(todo => (
  {
    ...todo, user: users.find(user => user.id === todo.userId),
  }));

function App() {
  return (
    <div className="App">
      <div className="header"><h1>Static list of todos:</h1></div>
      <div className="wrap-list">
        <TodoList todos={preparedTodos} />
      </div>
      <div className="footer">
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
    </div>
  );
}

export default App;
