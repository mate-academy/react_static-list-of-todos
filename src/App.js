import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="page-content">
        <div className="todos-list">
          <TodoList preparedTodos={preparedTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
