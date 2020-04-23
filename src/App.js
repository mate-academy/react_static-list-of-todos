import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((item) => {
  const todo = { ...item };

  const userInfo = users.find(user => user.id === todo.userId);

  todo.user = {
    id: userInfo.id,
    name: userInfo.name,
  };

  return todo;
});

const App = () => (
  <div className="app">
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
