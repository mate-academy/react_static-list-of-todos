import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

function getTodosWithUsers(todoList, userList) {
  return todoList.map(todo => (
    {
      ...todo,
      user: userList.find(user => user.id === todo.userId),
    }
  ));
}

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <>
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
