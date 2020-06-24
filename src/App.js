import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

export const App = () => {
  const Todos = todos.map(todo => ({
    ...todo,
    name: users.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <h2>Todos:</h2>
      <TodoList list={Todos} />
    </div>
  );
};
