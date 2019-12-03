import React from 'react';
import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';
import './App.css';

const getTodosWithUsers = (todosArr, usersArr) => (
  todosArr.map(todo => ({
    ...todo,
    user: usersArr.find(user => user.id === todo.userId),
  }))
);

const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>

    <TodoList list={getTodosWithUsers(todos, users)} />
  </div>
);

export default App;
