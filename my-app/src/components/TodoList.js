import React from 'react';
import TodoItem from './TodoItem';
import {todos} from '../todos';


export default function TodoList() {
  let listToAdd = [];
  for (const todo of todos) {
    let todoToAdd = <TodoItem key={todo.id} todo={todo} />
    listToAdd.push(todoToAdd);
  }
  return (
    <table>
      <thead><tr><th>Item</th><th>isCompleted</th><th>User</th></tr></thead>
      <tbody>
    {listToAdd}
      </tbody>
    </table>
  );
}