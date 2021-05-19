import React from 'react';
import {users} from './components/Users.jsx';

import './App.css';
import TodoList from './components/TodoList.jsx';
import {todos} from './components/Todos.jsx';

function App() {
  return (
    <TodoList todos={todos} users={users}/> 
  );
}

export default App;
