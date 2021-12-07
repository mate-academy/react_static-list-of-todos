import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { IUser } from './types/IUser';

const preparedTodos = todosFromServer.map((todo) => {
  const userObj: IUser | null = usersFromServer.find((user) => user.id === todo.userId) || null;

  const todoWithOwner = {
    ...todo,
    author: userObj,
  };

  return todoWithOwner;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
