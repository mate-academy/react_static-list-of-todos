import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './component/todoList/TodoList';

function getTodosWithUsers(todoList, userList) {
  return todoList.map(todo => ({
    ...todo,
    user: userList.find(item => item.id === todo.userId),
  }));
}

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

export default App;
