import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", color: "#171821"}}>ToDo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
