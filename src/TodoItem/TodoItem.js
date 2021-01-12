import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ user, title, completed }) => (
  <p>
    <strong>User Name: </strong>
    {user.name}
    <strong> Task: </strong>
    {title}
    <strong> Status: </strong>
    {completed ? 'Done' : 'In process'}
  </p>
);

TodoItem.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};
