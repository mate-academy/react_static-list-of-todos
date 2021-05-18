import React from 'react';
import PropTypes from 'prop-types';
import './ToDo.scss';
import { User } from '../User';

export const ToDo = ({ title, completed, user }) => (
  <div className="user">
    <h1 className="user-title">
      {title}

    </h1>
    <p className="user-info">
      <b>Status:</b>
      {completed ? ' Completed' : ' In progress' }
    </p>
    <User user={user} />
  </div>

);

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};
