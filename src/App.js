import React from 'react';
import './App.scss';
import { TodosList } from './components/TodosList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map((todo) => {
    const updatedTodo = todo;

    updatedTodo.user = users.find(user => user.id === todo.userId);

    return updatedTodo;
  });

  // eslint-disable-next-line no-console
  console.log(preparedTodos);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>
          Total todos:
          {' '}
          { todos.length}
        </span>
        {' '}
        <span>
          Completed todos:
          {' '}
          { todos.filter(todo => todo.completed).length}
        </span>
      </p>
      <TodosList todos={preparedTodos} />

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
