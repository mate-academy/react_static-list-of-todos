import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

import { User } from '../User/User';

export function Todo({ title, completed, user }) {
  return (
    <div className="todo">
      <p className={completed
        ? 'todo__title todo__title_completed' : 'todo__title'}
      >
        {title}
      </p>
      <User {...user} />
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
