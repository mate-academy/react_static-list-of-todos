import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <span className="user-name">
      {user.name}
    </span>
  );
}

export default User;

User.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};
