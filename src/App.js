import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

export const preparedTodos = [...todos].map(todo => ({
  ...todo,
  user: users.find(el => el.id === todo.userId),
}));

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <div className="container">
        <TodoList todos={preparedTodos} />
      </div>
    </>
  );
}

export default App;
