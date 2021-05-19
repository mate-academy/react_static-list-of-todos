import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const copy = {
    ...todo,
    user: users.find(({ id }) => id === todo.userId),
  };

  return copy;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        <TodoList {...preparedTodos} />
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
