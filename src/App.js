import React from 'react';
import './App.scss';
import { Todo } from './components/todo/todo';

function App() {
  return (
    <div className="todo__container">
      <Todo />
    </div>
  );
}

export default App;
