import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodolIst/TodoList';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <div className="App__container">
        <TodoList DataName={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
