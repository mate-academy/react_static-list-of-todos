import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodosList } from './components/TodosList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <div className="content">
        <TodosList todos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
