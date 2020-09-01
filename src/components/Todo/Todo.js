import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

import { User } from '../User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="todo-info">
      <div className={completed ? 'completed' : 'active'} />
      <p className="title">{title}</p>
    </div>

    <span className="user-info">
      <User {...user} />
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
