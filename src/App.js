import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(({ id }) => id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__title">
        Static list of todos
      </h1>
      <p className="App__statistics">
        <span>
          <b>Todos:</b>
          {todos.length}
          {' | '}
        </span>
        <span>
          <b>Users: </b>
          {users.length}
        </span>
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
