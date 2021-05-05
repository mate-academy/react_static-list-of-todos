import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';
import { User } from '../User';

export const Todo = ({
  user,
  id,
  title,
  completed,
}) => {
  const todoName = `todo-${id}`;

  return (
    <div className="todo-item">
      <User name={user.name} />
      <input
        name={todoName}
        className="todo-item__checkbox"
        id={todoName}
        type="checkbox"
        checked={completed}
      />
      <label
        htmlFor={todoName}
        className="todo-item__title"
      >
        {title}
      </label>
    </div>
  );
};

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  completed: false,
};
