import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
  <ul className="list">
    {props.todos.map(todo => (<TodoItem todo={todo} />))}
  </ul>
);

export default TodoList;
