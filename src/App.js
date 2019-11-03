import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import getTodosWithUsers from './getTodosWithUsers';
import GetTabeleTR from './GetTabeleTR';

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
      <GetTabeleTR props={getTodosWithUsers(todos, users)} />
      </tbody>
    </table>
  );
}

export default App;
