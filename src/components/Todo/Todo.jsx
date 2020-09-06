import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <span>{title}</span>
    <span>{completed ? 'YES' : 'NO'}</span>
    <span>
      <User name={user.name} />
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
