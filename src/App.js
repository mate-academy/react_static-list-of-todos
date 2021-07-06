import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import TodoList from './component/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  performer: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
