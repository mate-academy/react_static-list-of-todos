/* eslint-disable react/prop-types */

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <>
      <h1>List of todos</h1>
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </>
  );
}

const getTodosWithUsers = (t, u) => t.map((todo) => {
  const result = {
    ...todo,
    user: { ...u.find(user => user.id === todo.userId) },
  };

  return result;
});

export default App;
