import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/todolist/TodoList';

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

function getTodosWithUsers(todos, users) {
  return todos.map((todo) => {
    const userList = users.find(user => user.id === todo.userId);
    todo.user = userList;

    return todo;
  });
}

export default App;
