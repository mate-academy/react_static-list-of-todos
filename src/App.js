import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todos, users) {
  return todos.reduce((acum, todo) =>
    acum.concat({
      ...todo,
      user: users
        .find(user => user.id === todo.userId),
    })
  , []);
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
