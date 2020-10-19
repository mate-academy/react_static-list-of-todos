import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => (
    person.id === todo.userId
  )),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__head">Static list of todos</h1>
      <p
        className="App__count"
      >
        <span>Todos: </span>
        {todos.length}
      </p>
      <p className="App__count">
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
