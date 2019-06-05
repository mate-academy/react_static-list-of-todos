import React from 'react';
import './App.css';
import {todos} from './todos';
import {users} from './users';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
     <UserList users = {users} />
     <table>
       <tr>
         <th> TODO </th>
         <th> STATUS </th>
       </tr>
       <Todol todo={todos} />
      </table>
    </div>
  );
}

export default App;
