import React from 'react';
import './App.scss';
import { ToDoList } from './ToDoList/ToDoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(person => person.id === todo.userId);

  return todoCopy;
});

function App() {
  return (
    <ToDoList todos={preparedTodos} />
  );
}

export default App;
