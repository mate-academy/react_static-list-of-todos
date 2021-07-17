import React from 'react';
import TodoList from './components/TodoList';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import todos from './api/todos';
import users from './api/users';
// import { element } from 'prop-types';

function App() {
  return (
    <div className="App">
      <TodoList todos={todos} users={users} />
    </div>
  );
}

export default App;
