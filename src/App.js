import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const prepTodos = todos.map(todo => ({
  ...todo,
  name: users.find(
    user => (user.id === todo.userId),
  ).name,
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
      <TodoList todos={prepTodos} />

    </div>
  );
}

export default App;
