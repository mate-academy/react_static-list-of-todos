import React from 'react';
import { TodoList } from './components/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

  return (
    <>
      <h1 className="header">Static list of todos</h1>
      <div className="todo-list">
        <TodoList todo={preparedTodos} />
      </div>
    </>

  );
}

export default App;
