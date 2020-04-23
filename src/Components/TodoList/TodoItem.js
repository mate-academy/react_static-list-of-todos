import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const TodoItem = ({ title, completed, user }) => (
  <li className={
    completed
      ? 'todo__item todo__item--done'
      : 'todo__item'
  }
  >
    <span className="todo__item-title">{title}</span>
    <User {...user} />
  </li>
);

TodoItem.defaultProps = {};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
