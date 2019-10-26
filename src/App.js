import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/todolist/TodoList';

function getTodosWithUsers(todosArr, usersArr) {
  todosArr.forEach(todo => todo.user = usersArr
    .find(user => todo.userId === user.id));

  return todosArr;
}

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

export default App;
