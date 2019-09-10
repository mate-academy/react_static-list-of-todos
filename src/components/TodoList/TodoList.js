import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => (
  <div className="ui cards">
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />))}
  </div>
);

export default TodoList;
