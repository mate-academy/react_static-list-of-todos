import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/todoList';

import './App.scss';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
