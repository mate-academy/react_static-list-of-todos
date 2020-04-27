import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => (
    {
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }
  ));

  return (
    <TodoList todoList={preparedTodos} />
  );
}

export default App;
