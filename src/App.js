import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos
  .map(
    (todo) => {
      const todoCopy = todo;

      todoCopy.user = users.find(({ id }) => id === todo.userId);

      return todoCopy;
    },
  );

function App() {
  return (
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
      <TodoList tasks={preparedTodos} />
    </div>
  );
}

export default App;
