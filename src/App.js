import React from 'react';
import './App.css';
import { todos } from "./todos.js";
import { users } from "./users.js";
import TodoList from "./TodoList.js";
import UserList from "./UserList.js";

function App() {

  return (
    <table>
      <tr>
        <th> TODO </th>
        <th> User </th>
      </tr>

      <TodoList todoList={todos} />
      <UserList todoList={todos} userList={users} />

    </table>
  );
}

export default App;
