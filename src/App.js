import React from 'react';
import './App.css';
import { todos } from "./todos.js";
import { users } from "./users.js";
import TodoList from "./TodoList.js";

function App() {

  return (
    <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
	<th>Username</th>
	<th>Email</th>
	<th>Name</th>
        </tr>
      
		<TodoList todoList={todos} userList={users} />

    </table>
  );
}

export default App;
