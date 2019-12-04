/* eslint-disable */
import React from 'react';
import todos from './api/todos';
import users from './api/users';
import Todolist from './Components/Todolist';

function getTodosWithUsers(todositems, usersitems) {
  return todositems.map(item => (
    {
      ...item,
      user: usersitems.find(user => user.id === item.userId),
    }
  ));
}

const prepareTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <>
      <h2 style={{ textAlign: `center` }}>Static List of Todos</h2>
      <Todolist todos={prepareTodos} />
    </>
  );
}

export default App;
