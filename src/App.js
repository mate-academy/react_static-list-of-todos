import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId),
}));

function App() {
  return (
    <>
      <div className="App positioned">
        <h1 className="title is-2">Static list of todos</h1>
        <p className="title is-4">
          <span>Todos: </span>
          {todos.length}
        </p>

        <p className="title is-4">
          <span>Users: </span>
          {users.length}
        </p>
      </div>

      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
