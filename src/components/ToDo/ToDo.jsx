import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <div className="user">
    <h2 className="user-title">
      {title}
    </h2>
    <p className="user-info">
      <b>Status:</b>
      {completed ? ' Completed' : ' In progress'}
    </p>
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
