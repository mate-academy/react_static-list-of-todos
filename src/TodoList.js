import React from 'react';
import { todos } from '../todos';
import TodoItem from './TodoItem';

function TodoList() {

  const list = [];
  for (const article of todos) {
    list.push(<TodoItem article={article} />);
  }
  console.log(list[15].props.article);

  return (
    <table>
      <thead>
        <th>Task</th>
        <th>Name</th>
        <th>Completed</th>
      </thead>
      <tbody>{list}</tbody>
    </table>
  )
}

export default TodoList
