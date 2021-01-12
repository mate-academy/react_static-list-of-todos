import React from 'react';
import { TodoList } from './components/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = [...todos].map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList listOfTodos={preparedTodos} />
    </div>
  );
}

export default App;
