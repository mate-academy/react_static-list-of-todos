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
          <span><i>Todos: </i></span>
          <b>{todos.length}</b>
        </p>

        <p className="stats__users">
          <span><i>Users: </i></span>
          <b>{users.length}</b>
        </p>
      </div>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
