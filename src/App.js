import React from 'react';
import './App.css';

import apiTodos from './api/api-todos';
import apiUsers from './api/api-users';

import TodoList from './Components/TodoList/TodoList';
import Header from './Components/Header/Header';

function getTodosWithUsers(todos, usersList) {
  return todos.map(item => (
    {
      ...item,
      user: usersList.find(user => user.id === item.userId),
    }
  ));
}

const preparedTodos = getTodosWithUsers(apiTodos, apiUsers);

function App() {
  return (
    <>
      <Header />
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
