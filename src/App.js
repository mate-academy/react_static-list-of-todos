import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
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
      <div className="todo__list">
        <TodoList todo={preparedTodos} />
      </div>
    </>
  );
}

export default App;
