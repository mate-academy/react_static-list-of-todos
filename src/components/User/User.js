import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ id, user, title, status }) => (
  <tr>
    <td>{id}</td>
    <td>{user.name}</td>
    <td>{title}</td>
    <td>{`${status}`}</td>
  </tr>
);

User.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
