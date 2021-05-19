import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, user }) => (
  <>
    <span className="todo">
      <strong>Todos: </strong>
      {`${title} - ${completed}`}
    </span>
    <br />
    <span className="user">
      <strong>Users: </strong>
      {user}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};
