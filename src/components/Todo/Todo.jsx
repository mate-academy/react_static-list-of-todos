import React from 'react';
import './Todo.css';

import PropTypes from 'prop-types';
import User from '../User/User';

export function Todo({ title, completed, user }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={completed}
        className="checkbox"
      />
      <span>
        <strong>{title}</strong>
      </span>
      <User {...user} />
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

Todo.defaultProps = {
  user: {},
};
