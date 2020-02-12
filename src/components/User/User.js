import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ userId, users }) => (
  <td className="todo-td">{users.find(user => user.id === userId).name}</td>
);

User.propTypes = {
  userId: PropTypes.number,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

User.defaultProps = {
  userId: PropTypes.number,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};
