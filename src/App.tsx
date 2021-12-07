import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';

const preparedTodos = todosFromServer.map((todo) => {
  const userObj = usersFromServer.find((user) => user.id === todo.userId) || null;
  let userEmailAndName: [string, string];

  if (userObj !== null) {
    userEmailAndName = [userObj.email, userObj.name];
  } else {
    userEmailAndName = ['no email', 'no name'];
  }

  const todoWithOwner = {
    ...todo,
    author: userEmailAndName,
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
