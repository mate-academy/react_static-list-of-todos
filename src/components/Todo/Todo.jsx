import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ completed, title, user }) => (
  <div className="user">
    <h3 className="user__title">
      {'Title: '}
      {title}
    </h3>
    <User {...user} />
    {'Status is - '}
    {completed ? 'Completed' : 'Not completed'}
  </div>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
