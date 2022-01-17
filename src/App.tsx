import React from 'react';
import './App.scss';

import toDos from './api/todos';
import users from './api/users';

import { ToDoList } from './components/ToDoList/ToDoList';

const preparedList = toDos.map((toDo: ToDo) => (
  {
    ...toDo,
    user: users.find(user => (
      user.id === toDo.userId
    )) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>List Of tasks:</h1>
    <ToDoList
      preparedList={preparedList}
    />
  </div>
);

export default App;
