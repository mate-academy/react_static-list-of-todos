import React from 'react';
import './App.css';

import apitodos from './api/Apitodos';
import apiusers from './api/Apiusers';

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

const preparedTodos = getTodosWithUsers(apitodos, apiusers);

function App() {
  return (
    <>
      <Header />
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
