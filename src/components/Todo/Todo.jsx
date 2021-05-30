import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, user }) => (
  <>
    <span className="todo">
      <strong>Todo: </strong>
      {title}
      {' - '}
      {completed ? 'Completed' : 'Not completed'}
    </span>
    <br />
    <span className="user">
      <strong>User: </strong>
      {user.name}
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
