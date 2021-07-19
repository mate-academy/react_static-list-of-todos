import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <div>
    <h2 className="title">
      {title}
    </h2>
    <h3>
      {completed
        ? <div className="status">Status: completed!</div>
        : <div className="status-no">Status: not completed!</div>}
    </h3>
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
