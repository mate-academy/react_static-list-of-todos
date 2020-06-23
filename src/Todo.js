import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

const Todo = unit => (
  <li className="list">
    <div>
      <input
        type="checkbox"
        checked={unit.completed}
        readOnly
      />
      <span className="text">
        {unit.title[0].toUpperCase() + unit.title.substring(1)}
      </span>
    </div>
    <User {...unit.user} />
  </li>
);

export { Todo };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
