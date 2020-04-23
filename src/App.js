import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/todolist/TodoList';

function App() {
  const preparedTodos = todos.map(item => ({
    ...item, user: users.find(user => user.id === item.userId),
  }));

  return (
    <>
      <TodoList usersInfo={preparedTodos} />
    </>
  );
}

export default App;
