import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todoCard">
    <h2>{title}</h2>
    <p>{`Completed: ${completed}`}</p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
