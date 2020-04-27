import React from 'react';
import TodoListItem from "../todoListItem/todoListItem";

import './todoList.css';

function TodoList(props) {
  const todoItems = props.todoList.map(t => {
    return (
      <TodoListItem key={t.id} todoItem={t} />
    )
  });

  return (
    <ul  className="list">
      {todoItems}
    </ul>
  )
}

export default TodoList;
