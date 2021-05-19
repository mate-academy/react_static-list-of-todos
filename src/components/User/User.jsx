import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export default User;

function User({ user }) {
  return (
    <div className="user">
      {user.name}
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
