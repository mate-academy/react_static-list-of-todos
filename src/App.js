import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

const prepareTodos = todos.map(todo => ({
  ...todo,
  user: users.find (user => user.id === todo.userId),
}))

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
      <h1>Static list of todos</h1>
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
