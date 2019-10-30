import React from 'react';
import {users} from './users';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
     <UserList users = {users} />
    </div>
  );
}

export default App;
