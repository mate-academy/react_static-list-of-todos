import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';

const preparedTodos = todosFromServer.map((todo) => {
  const userObj = usersFromServer.find((user) => user.id === todo.userId) || null;
  let userEmail;

  if (userObj !== null) {
    userEmail = userObj.email;
  } else {
    userEmail = 'null';
  }

  const todoWithOwner = {
    ...todo,
    user: userEmail,
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
