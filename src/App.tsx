import React from 'react';
import './App.scss';

import toDos from './api/todos';
import users from './api/users';

import { ToDoList } from './components/ToDoList/ToDoList';

const App: React.FC = () => (
  <div className="App">
    <h1>List Of tasks:</h1>
    <ToDoList
      toDos={toDos}
      users={users}
    />
  </div>
);

export default App;
