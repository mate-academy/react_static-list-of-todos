import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function getTodosWithUsers(todos, users) {
  return todos.map(todo => ({
    ...todo,
    user: users.find(item => item.id === todo.userId),
  }));
}

const preparedTodos = getTodosWithUsers(todos, users);

const App = () => (
  <div className="main">
    <h1>Static list of todos</h1>
    <p>
      <span>Todos: </span>
      {todos.length}
      <br />
      <span>Users: </span>
      {users.length}
    </p>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
