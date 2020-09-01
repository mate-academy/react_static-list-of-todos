import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div>
      <h1 className="app__title">Static list of todos</h1>

      <div className="app">
        <TodoList list={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
