import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import './style.css';
import TodoList from './components/todoList/todoList';

function getTodoWithUsers(todoItems, userItems) {
  return todoItems.map(item => (
    {
      ...item,
      user: userItems.find(person => person.id === item.userId),
    }));
}

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <TodoList todoList={getTodoWithUsers(todos, users)} />
    </>
  );
}

export default App;
