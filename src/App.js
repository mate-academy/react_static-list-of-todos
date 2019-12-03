import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const App = () => {
  const getTodosWithUsers = (todosList, usersList) => todosList.map(
    todo => ({
      ...todo,
      user: usersList.find(user => user.id === todo.userId),
    })
  );

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList list={getTodosWithUsers(todos, users)} />
    </div>
  );
};

export default App;
