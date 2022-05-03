import React from 'react';
import './App.scss';

import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDo } from './types/ToDo';
import { User } from './types/User';

import todos from './api/todos';
import users from './api/users';

const list: ToDo[] = todos.map((toDo: Omit<ToDo, 'user'>) => ({
  ...toDo,
  user: users.find((user: User) => {
    return user.id === toDo.userId;
  }),
}
));

const App: React.FC = () => (
  <div className="App">
    <ToDoList
      list={list}
    />
  </div>
);

export default App;
