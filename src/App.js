import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => todo.userId === user.id),
  }));

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
