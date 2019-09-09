import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo__list todo-card">
      <a href="https://trello.com" className="todo-card">
        <h2>{props.todo.title}</h2>
        <p className="todo-list__completed">
          completed:
          <span className={`todo-list_indent ${props.todo.completed === false
            ? 'text-red'
            : 'text-green'}`}
          >
            {props.todo.completed === false ? '\u2A2F' : '\u2713'}
          </span>
        </p>

        <div className="todo-list__user">
          <User data={props.todo.user} />
        </div>
      </a>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
