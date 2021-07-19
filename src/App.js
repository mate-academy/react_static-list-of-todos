import React from 'react';
import './App.scss';
import { TodoList } from './Components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(task => ({
  ...task,
  user: users.find(person => person.id === task.userId).name,
}));

function App() {
  return (
    <>
      <h1 className="todoListTitle">Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </>
  );
}

export default App;
