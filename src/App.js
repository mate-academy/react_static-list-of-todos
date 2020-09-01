import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todosPrep={preparedTodos} />
    </div>
  );
}

export default App;
