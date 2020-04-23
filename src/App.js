import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const userCatalog = users.find(user => todo.userId === user.id);

  return {
    ...todo, userCatalog,
  };
});

function App() {
  return (
    <div className="todo">
      <h1 className="todo__header">Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
