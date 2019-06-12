import React from 'react';
import TodoItem from "./TodoItem";
import User from "./User";
import {todos} from '../todos';
import {users} from '../users';

function TodoList() {
  let listOfComponents = todos.map((e) => {
    let user = users.find((u) => {
      return u.id === e.userId;
    });
    return (
      <tr key={e.id.toString()}>
        <TodoItem key={e.id} item={e.title}/>
        <User key={user.username} username={user.name}/>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
      {listOfComponents}
      </tbody>
    </table>
  );
}

export default TodoList;
