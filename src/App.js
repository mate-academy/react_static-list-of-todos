import React from 'react';
import './App.scss';
import { ToDoList } from './ToDoList/ToDoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((item) => {
  const newItem = { ...item };

  newItem.user = users.find(person => person.id === item.userId);

  return newItem;
});

function App() {
  return (
    <ToDoList toDos={preparedTodos} />
  );
}

export default App;
