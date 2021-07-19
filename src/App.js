import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/todolist';

const preparedTodos = todos.map((task) => {
  const newTask = { ...task };

  newTask.user = users.find(person => person.id === task.userId).name;

  return newTask;
});

const App = () => <TodoList preparedTodos={preparedTodos} />;

export default App;
