import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const newTodo = { ...todo };

  newTodo.user = users.find(user => user.id === newTodo.userId);

  return newTodo;
});

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

      <TodoList content={preparedTodos} />
    </div>
  );
}

export default App;
