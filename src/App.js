import React from 'react';
import './App.scss';
import { TodoList } from './components/todoList/todoList';

function App() {
  return (
    <div className="todo__container">
      <TodoList />
    </div>
  );
}

export default App;
