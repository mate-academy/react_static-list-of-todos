import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => (
    {
      ...todo,
      user: users.find(user => todo.userId === user.id),
    }
  ));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
