import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId),
}));

function App() {
  return (
    <div className="App container">
      <h1 className="app__title">Static list of todos</h1>
      <p className="app__info">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="app__info">
        <span>Users: </span>
        {users.length}
      </p>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
