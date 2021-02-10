/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { User } from './components/User';

const addUsers = () => {
  const res = [...todos];

  for (let i = 0; i < res.length; i++) {
    const user = users.find((item) => item.id === res[i].userId);

    res[i].user = user;
  }

  return res;
};

const preparedTodos = addUsers();

function App() {
  return (
    <div className="App">
      <h2>Todos</h2>
      <TodoList todos={preparedTodos} />
      <h2>Users</h2>
      <ul>
        {users.map((item) => (
          <li>
            <User user={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
