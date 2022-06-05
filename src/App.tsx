import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { User } from './components/UserInfo';
import { TodoList } from './components/TodoList';
import { Todo } from './components/TodoInfo';

const currentUsers: User[] = users.map(user => user);
const preparedTodos: Todo[] = todos.map(obj => {
  const foundUser = currentUsers.find(user => user.id === obj.userId);
  const temp:Todo = {
    ...obj,
    user: foundUser === undefined ? null : foundUser,
  };

  return temp;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList {...preparedTodos} />
  </div>
);

export default App;
