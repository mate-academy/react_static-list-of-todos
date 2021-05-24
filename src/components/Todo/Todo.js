import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Todo.scss';

import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <span>{title}</span>
    <span className={classNames(completed ? 'todo-completed' : 'todo-uncompleted')}>
      {completed ? 'completed' : 'in progress'}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
