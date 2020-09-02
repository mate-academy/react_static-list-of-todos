import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
