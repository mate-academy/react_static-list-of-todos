import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ id, title, completed, user }) => (
  <>
    <th scope="row">{id}</th>
    <td>{title}</td>
    <td>{completed ? 'Completed!' : 'Not completed!'}</td>
    <td>{user}</td>
  </>
);

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: PropTypes.string.isRequired,
};
