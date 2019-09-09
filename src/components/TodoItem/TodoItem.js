import React from 'react';
import User from '../User/User';
import './TodoItem.css';
import { TodoItemPropTypes } from '../../constants/proptypes';

function TodoItem(props) {
  return (
    <li className={!props.todo.completed ? 'todo-item' : 'todo-item completed'}>
      <div className="drawing-pin">
        <img
          className="drawing-pin__img"
          alt="drawing-pin"
          src="./images/Drawing-Pin.png"
        />
      </div>
      <h1 className="item-title">
        {props.todo.title}
      </h1>
      <div className="item-user">
        <User user={props.todo.user} />
      </div>
    </li>
  );
}

TodoItem.propTypes = TodoItemPropTypes;

export default TodoItem;
