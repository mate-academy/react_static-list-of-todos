import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodo = todos.map(todo => ({
  ...todo,
  user: users.find(human => human.id === todo.userId),
}));

function App() {
  return (
    <>
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodo} />
    </>
  );
}

export default App;
