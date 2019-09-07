import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import User from '../User/User';

const TodoItem = ({ todo, key }) => {
  const { title, completed, user } = todo;

  return (
    <div className="todo-item" key={key}>
      <h2 className="todo-item__title">{title}</h2>
      <p className="todo-item__check">{completed ? '\u2713' : ''}</p>
      <User user={user} />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.object,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

export default TodoItem;
