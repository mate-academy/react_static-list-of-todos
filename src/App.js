import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/todolist';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(person => person.id === todo.userId);

  return todoCopy;
});

const App = () => <TodoList todos={preparedTodos} />;

export default App;
