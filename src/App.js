import React from 'react';
import './App.css';
import users from './api/users';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <UserList users={users} />

    </div>
  );
}

export default App;
