import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const {
    title, completed, user, id,
  } = todo;

  let classNames = 'todo-list__item';

  if (completed) {
    classNames += ' done';
  }

  return (
    <span className={classNames}>
      <span className="todo-list__item-id">{id}</span>
      <User user={user} />
      <span className="todo-list__item-name">{title}</span>
    </span>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TodoItem;
