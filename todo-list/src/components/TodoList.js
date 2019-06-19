import React from 'react';
import TodoItem from "./TodoItem";
import {todos} from '../todos';
import {users} from '../users';

function TodoList() {
  const listOfComponents = todos.map(element => {
    const user = users.find(user => user.id === element.userId);
    return (
      <TodoItem key={element.id} item={element.title} username={user.name}/>
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
