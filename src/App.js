import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const App = () => {
  const getTodoWithUsers = (todoList, userList) => todoList.map(
    todo => (
      {
        ...todo,
        user: userList.find(person => person.id === todo.userId),
      })

  );
  const preparedTodos = getTodoWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
