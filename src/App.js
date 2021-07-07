import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => todo.userId === user.id),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <div className="stats">
        <p className="stats__todos">
          <span className="stats__title">Todos: </span>
          <span className="stats__value">{todos.length}</span>
        </p>

        <p className="stats__users">
          <span className="stats__title">Users: </span>
          <span className="stats__value">{users.length}</span>
        </p>
      </div>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
