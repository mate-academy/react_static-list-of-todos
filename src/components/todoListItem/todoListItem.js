import React from 'react';
import PropTypes from 'prop-types';
import './todoListItem.css';

function TodoListItem(props) {

  const t = props.todoItem || null;

  let liClass = `item ${(t?.completed ? "done" : "notReady")}`;
  let title = t?.title;
  let completed = t?.completed;
  let user = t?.user;

  return (
    <li className={liClass}>
      <p>{title}</p>
      <h1 className="title">{user.name}</h1>
      <p className={(completed ? "done" : "notReady")}>
      {(completed ? "ready" : "not ready")}
      </p>
    </li>
  )
}

TodoListItem.propTypes = {
  todoItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired
};

export default TodoListItem;
