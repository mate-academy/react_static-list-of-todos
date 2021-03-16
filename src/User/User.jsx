import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <p className="user__name">
    <strong>
      {user.name}
    </strong>
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
