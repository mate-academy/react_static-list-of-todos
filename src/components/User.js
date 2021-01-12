import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <p className="user__name">{user.name}</p>
  );
}

export default User;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
