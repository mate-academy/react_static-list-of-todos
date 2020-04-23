import React from 'react';
import PropTypes from 'prop-types';

function User({ user: { name } }) {
  return (
    <p className="user__name">
      {
        name
      }
    </p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
