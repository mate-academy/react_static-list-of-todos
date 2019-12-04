import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = getTodosWithUsers(todos, users);

function getTodosWithUsers(todosArr, usersArr) {
  return todosArr.map(todo => (
    {
      ...todo,
      user: { ...usersArr.find(user => user.id === todo.userId) },
    }
  ));
}

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <ToDoList todos={preparedTodos} />
    </>
  );
}

export default App;
