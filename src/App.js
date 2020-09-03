import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => (user.id === todo.userId)),
}));

function App() {
  return (
    <>
      <div className="info">
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
      <div className="content">
        <TodoList list={preparedTodos} />
      </div>
    </>
  );
}

export default App;
