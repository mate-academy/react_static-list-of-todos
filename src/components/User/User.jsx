import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user }) => (
  <div className="User">
    user:
    <span className="User__name">
      {` ${user.name}`}
    </span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
