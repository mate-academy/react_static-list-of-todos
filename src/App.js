import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(
    todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }),
  );

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">User name</th>
          </tr>
        </thead>
        <tbody>
          <TodoList todos={preparedTodos} />
        </tbody>
      </table>
    </>
  );
}

export default App;
