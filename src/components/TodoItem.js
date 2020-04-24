import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <div className={completed
      ? 'user__completed-true'
      : 'user__completed-false'
    }
    >
      <h2 className="user__name"><User {...user} /></h2>

      <p className="user__title">{title}</p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
