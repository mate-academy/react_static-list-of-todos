import React from 'react';
import './App.css';

import todosWithUsers from './api/getTodosWithUsers';
import TodoList from './component/todoList/todoList';

function App() {
  return (
    <>
      <h1 className="app__title">Static list of todos</h1>
      <TodoList todos={todosWithUsers}/>
    </>
  )
}

export default App;
