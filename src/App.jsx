import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => (
    person.id === todo.userId
  )),
}));

function App() {
  return (
    <TodoList todos={preparedTodos} />
  );
}

export default App;
