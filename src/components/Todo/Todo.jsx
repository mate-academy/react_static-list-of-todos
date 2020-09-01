import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <p className="todo__title">{title[0].toUpperCase() + title.slice(1)}</p>
    <p className={completed
      ? 'todo__completeness todo__completeness_completed'
      : 'todo__completeness'}
    >
      {completed ? 'completed' : 'uncompleted'}
    </p>
    <User name={user.name} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
