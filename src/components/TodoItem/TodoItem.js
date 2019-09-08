import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div
      className={`todo-list__item card border-${props.todo.completed
        === false
        ? 'danger'
        : 'success'} mb-3`}
    >
      <div className="card-header">
        <span className="todo-list__title">
          Todo:
        </span>
        <span className="todo-list_indent">
          {props.todo.title}
        </span>
      </div>
      <div>

      </div>
      <p className={`todo-list__completed card-title text-${props.todo.completed
        === false
        ? 'danger'
        : 'success'}`}
      >
        completed:
        <span className="todo-list_indent">
          {props.todo.completed === false ? 'false' : 'true'}
        </span>
      </p>

      <div className={`todo-list__user text-${props.todo.completed
        === false
        ? 'danger'
        : 'success'}`}
      >
        <User data={props.todo.user} />
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
