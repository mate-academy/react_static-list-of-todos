import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const prepearedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(usertoAdd => usertoAdd.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__header">Static list of Todos</h1>
      <TodoList todos={prepearedTodos} />
    </div>
  );
}

export default App;
