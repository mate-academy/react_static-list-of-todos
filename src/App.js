import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/todoList/TodoList';

function getTodosWithUsers() {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));
}

const preparedTodos = getTodosWithUsers();

function App() {
  return (
    <TodoList todos={preparedTodos} />
  );
}

export default App;
