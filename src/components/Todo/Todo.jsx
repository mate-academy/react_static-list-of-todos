import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <div className="container">
      <User {...user} />
      <div className="title">
        {title}
      </div>
      <div className="completed">
        {completed ? 'task is completed' : 'task is in progress'}
      </div>
    </div>
  </>
);
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
