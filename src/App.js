import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodosList } from './components/TodoList/TodosList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
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

      <>
        <TodosList todosList={preparedTodos} />
      </>
    </div>
  );
}

export default App;
