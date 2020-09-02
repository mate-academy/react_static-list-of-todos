import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

const prepearedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="container">
      <h1>Static list of todos</h1>
      <TodoList prepearedTodos={prepearedTodos} />
    </div>
  );
}

export default App;
