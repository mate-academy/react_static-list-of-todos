import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

import { todos } from './api/todos';
import { users } from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(
    user => todo.userId === user.id,
  ),
}));

function App() {
  return (
    <div className="App">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
