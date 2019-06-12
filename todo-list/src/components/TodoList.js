import React from 'react';
import TodoItem from "./TodoItem";
import {todos} from '../todos';
import {users} from '../users';

function TodoList() {
  let listOfComponents = todos.map((e) => {
    let user = users.find((u) => {
      return u.id === e.userId;
    });
    return (
        <TodoItem key={e.id} item={e.title} username={user.name}/>
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
