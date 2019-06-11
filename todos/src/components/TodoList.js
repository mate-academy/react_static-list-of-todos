import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList(props) {
  const todoList = props.todoList.map(todo =>
    <TodoItem {...todo} key={todo.id} />);
  return (
    <table>
      <thead>
        <tr>
        <th>Todo ID</th>
        <th>Todo</th>
        <th>Completed</th>
        <th>User name</th>
        </tr>
      </thead>
      <tbody>
        {todoList}
      </tbody>
    </table>
  );
}

export default TodoList;
