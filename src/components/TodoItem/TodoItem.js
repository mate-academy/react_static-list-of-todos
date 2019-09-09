import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import User from '../User/User';

function TodoItem({
  key, title, completed, user,
}) {
  return (
    <div className="todo-item" key={key}>
      <h2 className="todo-item__title">{title}</h2>
      <p className="todo-item__check">{completed ? '\u2713' : ''}</p>
      <User {...user} />
    </div>
  );
}

TodoItem.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
