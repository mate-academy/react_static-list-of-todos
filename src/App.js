import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(task => ({
  ...task,
  user: users.find(us => us.id === task.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="App__list">
        <TodoList src={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
