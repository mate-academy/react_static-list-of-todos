import './todoItem.css';
import React from 'react';
import User from '../user/user';

function TodoItem(props) {
  return (
    <div className={`card ${props.todo.completed ? "background-color__green" :
      "background-color__yellow"}`}>
      <h3 className="card__title">{props.todo.title}</h3>
      <div className="card__checked">
        <i className="icon far fa-check-square"></i> Complited Task:
        {props.todo.completed ? <i className="icon checked fas fa-check"></i> :
        <i class="icon unchecked fas fa-times"></i> }
      </div>
      <User person={props.todo.user} />
    </div>
  )
}

export default TodoItem;
