import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

function getTodosWithUsers(todosArr, usersArr) {
  return todosArr.map(todo => (
    {
      ...todo,
      user: usersArr.find(user => user.id === todo.userId),
    }
  ));
}

function App() {
  return (
    <TodoList items={getTodosWithUsers(todos, users)} />
  );
}

export default App;
