import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(person => person.id === todo.userId),
  }
));

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
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
