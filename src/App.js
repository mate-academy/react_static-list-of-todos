import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(elem => item.userId === elem.id),
}));

function App() {
  return (
    <div className="App">
      <h1 className="page-title">Static list of todos</h1>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
