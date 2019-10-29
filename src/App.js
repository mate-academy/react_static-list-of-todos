import React from 'react';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todos, users) {
  return todos.map((todo) => {
    const userList = users.find(user => user.id === todo.userId);
    todo.user = userList;

    return todo;
  });
}

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

export default App;
