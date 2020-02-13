import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <td className="todo-list__item-info">{user.name}</td>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
