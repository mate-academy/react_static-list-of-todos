import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map((todo) => {
    const a = {
      ...todo,
      user: users[todo.userId - 1],
    };

    return a;
  });

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
      <TodoList
        preparedTodos={preparedTodos}
      />
    </div>
  );
}

export default App;
