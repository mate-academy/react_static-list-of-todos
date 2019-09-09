import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <>
      <Header usersCount={users.length} todosCount={todos.length} />
      <TodoList todos={preparedTodos} />
    </>
  );
}

function getTodosWithUsers(todos, users) {
  return todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }));
}

export default App;
