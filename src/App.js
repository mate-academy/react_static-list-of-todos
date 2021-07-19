import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((item) => {
  const newUser = { ...item };

  newUser.user = users.find(person => person.id === item.userId);

  return newUser;
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

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
