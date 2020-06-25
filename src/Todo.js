import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

const Todo = ({ completed, title, user }) => (
  <li className="list">
    <div>
      <input
        type="checkbox"
        checked={completed}
        readOnly
      />
      <span className="text">
        {title[0].toUpperCase() + title.slice(1)}
      </span>
    </div>
    <User {...user} />
  </li>
);

export { Todo };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
