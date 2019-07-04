import React from 'react';
import User from './User';

const TodoItem = props => (
  <li className="list__item">
    <label className="list__label">
      <input type="checkbox" checked={props.todo.completed}/>
      {props.todo.title}
    </label>
    <User user={props.todo.user} email={props.todo.email} phone={props.todo.phone}/>
  </li>
);

export default TodoItem;
