import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparesTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <TodoList todos={preparesTodos} />
    </div>
  );
}

export default App;
