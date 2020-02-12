import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user, name, status }) => (
  <tr>
    <td>{user.name}</td>
    <td>{name}</td>
    <td>{`${status}`}</td>
  </tr>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
