import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import getTodosWithUsers from './getTodosWithUsers';
import GetTabeleTR from './GetTabeleTR';

getTodosWithUsers(todos, users);

function App() {
  return (
    <table className="App">
      <thead>
        <tr>
          <th>TODO item</th>
          <th>Status</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
      <GetTabeleTR props={todos} />
      </tbody>
    </table>
  );
}

export default App;
