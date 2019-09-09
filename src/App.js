import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';

function getTodosWithUsers(todoss, usersList) {
  return todoss.map(item => (
    {
      ...item,
      user: usersList.find(user => user.id === item.userId),
    }
  ));
}

const preparedTodos = getTodosWithUsers(todos, users);

const App = () => (
  <>
    <h1 className="static-list__title">Static List of Todos</h1>
    <div className="container">
      <TodoList todos={preparedTodos} />
    </div>
  </>
);

export default App;
