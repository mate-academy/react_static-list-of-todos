import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(item => (
  {
    ...item,
    user: users.find(person => person.id === item.userId),
  }));

function App() {
  return (
    <TodoList todoList={preparedTodos} />
  );
}

export default App;
