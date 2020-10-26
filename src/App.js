import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const preparedTodos = todos.map(todoItem => ({
  ...todoItem,
  user: users.find(user => user.id === todoItem.userId),
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
