import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

function User({ user }) {
  return (
    <td className="tableCell">{user.name}</td>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
