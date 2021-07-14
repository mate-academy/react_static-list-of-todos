import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((task) => {
  const newTask = { ...task };

  newTask.user = users.find(person => person.id === task.userId).name;

  return newTask;
});

function App() {
  return (
    <>
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </>
  );
}

export default App;
