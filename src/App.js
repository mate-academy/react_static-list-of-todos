import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <TodoList data={preparedTodos} />
  );
}

export default App;
