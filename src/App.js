/* eslint-disable react/prop-types */

import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

import todos from './api/todos';
import users from './api/users';

function App() {
  const todosWithUsers = getTodosWithUsers(todos, users);

  return (
    <>
      <h1>List of todos</h1>
      <ul>
        {todosWithUsers.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </ul>
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
