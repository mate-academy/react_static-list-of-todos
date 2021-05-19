import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <h1 className="todo-list__title">
      {' '}
      {title}
      {' '}
    </h1>
    <span className="todo-list__status">
      {`${completed}`}
    </span>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
};
