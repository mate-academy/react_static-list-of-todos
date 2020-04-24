import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = () => todos.map(message => ({
  ...message,
  user: users.find(person => person.id === message.userId),
}));

const App = () => (
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
    <TodoList list={preparedTodos()} />
  </div>
);

export default App;
