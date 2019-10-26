import React from 'react';
import "./TodoList.css";
import TodoItem from '../todoitem/TodoItem';

const TodoList = (props) => {
  return (
    <table class="ui celled table">
      <thead>
        <th>Title</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </thead>
      <tbody>
        {props.todos.map((todo) => <TodoItem todo={todo} />)};
      </tbody>
    </table>
  )
}

export default TodoList;
