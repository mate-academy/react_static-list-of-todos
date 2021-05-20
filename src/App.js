import React from 'react';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';
import './App.scss';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
