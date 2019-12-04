import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <td>{user.name}</td>
  );
}

// User.propTypes = { user: PropTypes.objectOf(PropTypes.any).isRequired };
User.propTypes = { user: PropTypes.string.isRequired };
export default User;
