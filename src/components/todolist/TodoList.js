import React from 'react';
import "./TodoList.css";
import TodoItem from '../todoitem/TodoItem';

const TodoList = ({todos}) => {
  return (
    <table class="ui celled table">
      <thead>
        <th>Title</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </thead>
      <tbody>
        {todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)};
      </tbody>
    </table>
  )
}

export default TodoList;
