import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  id: todo.id,
  title: todo.title,
  completed: todo.completed,
  user: users.find(user => user.id === todo.userId),
  username: users.find(user => user.id === todo.userId).username,
}));

export const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <p>
      <span>Todos: </span>
      {todos.length}
    </p>
    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <TodoList list={preparedTodos} />
  </div>
);
