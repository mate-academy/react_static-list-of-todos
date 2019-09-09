import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

function App() {
  const todosUser = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={todosUser} />
    </div>
  );
}

function getTodosWithUsers(todosArr, usersArr) {
  return todosArr.map(todo => ({
    ...todo,
    user: usersArr.find(elem => elem.id === todo.userId),
  }));
}

export default App;
