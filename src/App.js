import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const prepareTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <>
      <div className="App">
        <h1 className="App__title">Static list of todos</h1>
        <p>
          <span className="App__description">Todos: </span>
          <span className="App__value">{todos.length}</span>
        </p>

        <p>
          <span className="App__description">Users: </span>
          <span className="App__value">{users.length}</span>
        </p>
      </div>

      <TodoList list={prepareTodos} />
    </>
  );
}

export default App;
