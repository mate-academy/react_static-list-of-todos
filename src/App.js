import React from 'react';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map((todo) => {
    const currentUser = usersList.find(user => user.id === todo.userId);
    todo.user = currentUser;

    return todo;
  });
}

function App() {
  return (
    <TodoList todos={getTodosWithUsers(todos, users)} />
  );
}

export default App;
