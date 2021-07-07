import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const prepearedTodos = todos.map(el => ({
  ...el,
  user: users[el.userId - 1],
}));

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
      <TodoList prepearedTodos={prepearedTodos} />
    </div>
  );
}

export default App;
