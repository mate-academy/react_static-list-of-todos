import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import './style.css';
import TodoList from './components/todoList/todoList';

function getTodoWithUsers(todo, user) {
  return todo.map(todoItem => (
    {
      ...todoItem,
      user: user
        .filter(userItem => userItem.id === todo.userId),

    }));
}

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <TodoList todos={getTodoWithUsers(todos, users)} />
    </>
  );
}

// todoList
// todoItem
// user

export default App;
