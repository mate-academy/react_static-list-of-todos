import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <div className="app__info">
        <div className="app__text">
          <span>Todos: </span>
          {todos.length}
        </div>

        <div className="app__text">
          <span>Users: </span>
          {users.length}
        </div>
      </div>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
