import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos
  .map(todo => ({
    ...todo,
    userTodo: users.find(user => user.id === todo.userId),
  }));

function App() {
  return (
    <TodoList todos={preparedTodos} />
  );
}

export default App;
