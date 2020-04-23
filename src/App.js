import React from 'react';
import './App.css';
import { TodoList } from './component/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const current = { ...todo };

  current.user = users.find(user => user.id === todo.userId);

  return current;
});

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
      <div className="List">
        <TodoList list={preparedTodos} />
      </div>
    </>
  );
}

export default App;
