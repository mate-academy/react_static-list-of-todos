import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/todolist/TodoList';

function getTodosWithUsers(todos, users) {

  return todos.map(todo => {
    const userObj = users.find(user => todo.userId === user.id);
    todo.user = userObj;
    return todo;
  });
}

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

export default App;
